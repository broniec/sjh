using Microsoft.EntityFrameworkCore.Migrations;

namespace HackathonSite.Migrations
{
    public partial class _1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    LogoLink = table.Column<string>(nullable: true),
                    GenderScore = table.Column<string>(nullable: true),
                    DiversityText = table.Column<string>(nullable: true),
                    DiversityReportLink = table.Column<string>(nullable: true),
                    EthnicityScore = table.Column<string>(nullable: true),
                    CalendarLink = table.Column<string>(nullable: true),
                    ERGText = table.Column<string>(nullable: true),
                    DemoJob = table.Column<string>(nullable: true),
                    DemoJobSalary = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SalaryItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Job = table.Column<string>(nullable: true),
                    Gender = table.Column<string>(nullable: true),
                    Ethnicity = table.Column<string>(nullable: true),
                    State = table.Column<string>(nullable: true),
                    Salary = table.Column<decimal>(nullable: false),
                    Bonus = table.Column<decimal>(nullable: false),
                    GetBonus = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SalaryItems", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "SalaryItems");
        }
    }
}
