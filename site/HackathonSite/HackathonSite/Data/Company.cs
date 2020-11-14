namespace HackathonSite.Data
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        // maybe we ditch this...
        public string LogoLink { get; set; }

        public string CalendarLink { get; set; }
        public string DiversityText { get; set; }
        public string ERGText { get; set; }
    }
}
