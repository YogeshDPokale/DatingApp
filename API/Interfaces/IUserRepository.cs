using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces;

public interface IUserRepository
{
    void Update(AppUser user);
    Task<IEnumerable<AppUser>> GetUsersAsync();
    public Task<(sendDataToFastApi currentUser, List<sendDataToFastApi> otherUsers)> GetUsersToSendAsync(int currentUserId);
    Task<AppUser> GetUserByIdAsync(int id);
    Task<AppUser> GetUserByUsernameAsync(string username);
    Task<PagedList<MemberDto>> GetMembersAsync(UserParams userParams, int currentUserId);
    Task<PagedList<MemberDto>> GetMembersWithProcessedListAsync(UserParams userParams, int currentUserId, List<int> userList);
    Task<MemberDto> GetMemberAsync(string username);
}

