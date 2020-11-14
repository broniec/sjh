namespace HackathonSite.Data
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        // maybe we ditch this...
        public string LogoLink { get; set; }

        // Diversity Section
        public string DiversityScore { get; set; }
        public string DiversityText { get; set; }

        // D&I Event Section
        public string CalendarLink { get; set; }

        // ERG ???
        public string ERGText { get; set; }
    }
}
