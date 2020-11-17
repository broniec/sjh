using Microsoft.EntityFrameworkCore.Migrations;

namespace HackathonSite.Migrations
{
    public partial class _2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DiversityStats",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyId = table.Column<int>(nullable: false),
                    Year = table.Column<int>(nullable: false),
                    Group = table.Column<string>(nullable: true),
                    Percentage = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DiversityStats", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DiversityStats");
        }
    }
}
