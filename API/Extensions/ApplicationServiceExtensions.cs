using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AdApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // Connection String
            services.AddDbContext<DataContext>(opt =>
            {
                //Getting the connection string from the appSetting.json
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));

            });


            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return services;
        }
    }
}