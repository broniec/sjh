using Microsoft.EntityFrameworkCore;


namespace HackathonSite.Data
{
    public class HContext : DbContext
    {
        public const string ConnectionString = "Server=sjh-hackathon.database.windows.net;Database=data;User Id=odl_user_229001;Password=***REMOVED***;";

        public DbSet<Company> Companies { get; set; }

        public HContext(DbContextOptions<HContext> options)
        : base(options)
        { }
    }
}
