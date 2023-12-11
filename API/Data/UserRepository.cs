using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class UserRepository : IUserRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public UserRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task<MemberDto> GetMemberAsync(string username)
    {
        return await _context.Users
            .Where(x => x.UserName == username)
            .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
    }

   public async Task<PagedList<MemberDto>> GetMembersAsync(UserParams userParams, int currentUserId)
{
    var query = _context.Users.AsQueryable();

    query = query.Where(u => u.UserName != userParams.CurrentUsername);
    query = query.Where(u => u.Gender == userParams.Gender);

    var minDob = DateOnly.FromDateTime(DateTime.Today.AddYears(-userParams.MaxAge - 1));
    var maxDob = DateOnly.FromDateTime(DateTime.Today.AddYears(-userParams.MinAge));

    query = query.Where(u => u.DateOfBirth >= minDob && u.DateOfBirth <= maxDob);

    query = userParams.OrderBy switch
    {
        "created" => query.OrderByDescending(u => u.Created),
        _ => query.OrderByDescending(u => u.LastActive)
    };

    var members = await PagedList<MemberDto>.CreateAsync(query.AsNoTracking()
        .ProjectTo<MemberDto>(_mapper.ConfigurationProvider),
        userParams.PageNumber, userParams.PageSize);

    foreach (var memberDto in members)
    {
        memberDto.Liked = await UserLikes(currentUserId, memberDto.Id);
    }

    return members;
}
    public async Task<PagedList<MemberDto>> GetMembersWithProcessedListAsync(UserParams userParams, int currentUserId, List<int> userList)
    {
        var query = _context.Users.AsQueryable();

        query = query.Where(u => u.UserName != userParams.CurrentUsername);
        query = query.Where(u => u.Gender == userParams.Gender);

        var minDob = DateOnly.FromDateTime(DateTime.Today.AddYears(-userParams.MaxAge - 1));
        var maxDob = DateOnly.FromDateTime(DateTime.Today.AddYears(-userParams.MinAge));

        query = query.Where(u => u.DateOfBirth >= minDob && u.DateOfBirth <= maxDob);

        query = userParams.OrderBy switch
        {
            "created" => query.OrderByDescending(u => u.Created),
            _ => query.OrderByDescending(u => u.LastActive)
        };

        // Filter the query to include only users from the provided userList
        query = query.Where(u => userList.Contains(u.Id));

        // Materialize the query (bring data into memory) before sorting
        var usersList = await query.AsNoTracking()
            .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
            .ToListAsync();

        // Order the results based on the order of user IDs in the userList
        var orderedList = usersList.OrderBy(u => userList.IndexOf(u.Id)).ToList();

        var members = new PagedList<MemberDto>(orderedList, usersList.Count, userParams.PageNumber, userParams.PageSize);

        foreach (var memberDto in members)
        {
            memberDto.Liked = await UserLikes(currentUserId, memberDto.Id);
        }

        return members;
    }

    public async Task<bool> UserLikes(int sourceUserId, int targetUserId)
    {
        return await _context.Likes.AnyAsync(l => l.SourceUserId == sourceUserId && l.TargetUserId == targetUserId);
    }


    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task<AppUser> GetUserByUsernameAsync(string username)
    {
        return await _context.Users
            .Include(p => p.Photos)
            .SingleOrDefaultAsync(x => x.UserName == username);
    }

    public async Task<IEnumerable<AppUser>> GetUsersAsync()
    {
        return await _context.Users.ToListAsync();
    }
    public async Task<(sendDataToFastApi currentUser, List<sendDataToFastApi> otherUsers)> GetUsersToSendAsync(int currentUserId)
    {
        // Retrieve the current user
        var currentUserEntity = await _context.Users
            .FirstOrDefaultAsync(u => u.Id == currentUserId);

        var currentUser = MapToUserDto(currentUserEntity);

        // Retrieve other users
        var otherUsersEntities = await _context.Users
            .Where(u => u.Id != currentUserId)
            .ToListAsync();

        var otherUsers = otherUsersEntities.Select(MapToUserDto).ToList();

        return (currentUser, otherUsers);
    }

    private sendDataToFastApi MapToUserDto(AppUser userEntity)
    {
        // Implement the mapping logic from AppUser to UserDto
        // For simplicity, you can manually map properties
        return new sendDataToFastApi
        {
            Id = userEntity.Id,
            UserName = userEntity.UserName,
            Gender = userEntity.Gender,
            Age = userEntity.GetAge(),
            Interests = userEntity.Interests,
            // Map other properties
        };
    }


    public void Update(AppUser user)
    {
        _context.Entry(user).State = EntityState.Modified;
    }
}
