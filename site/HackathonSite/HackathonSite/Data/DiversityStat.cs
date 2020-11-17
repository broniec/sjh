namespace HackathonSite.Data
{
    public class DiversityStat
    {
        // ignore
        public int Id { get; set; }

        public int CompanyId { get; set; }
        // 2017, 2018, etc.
        public int Year { get; set; }
        // 'Male', 'White', etc.
        public string Group { get; set; }
        public decimal Percentage { get; set; }
    }
}
