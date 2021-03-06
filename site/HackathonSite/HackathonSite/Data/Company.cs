﻿namespace HackathonSite.Data
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        // maybe we ditch this...
        public string LogoLink { get; set; }

        // Diversity Section
        public string GenderScore { get; set; }
        public string DiversityText { get; set; }
        public string DiversityReportLink { get; set; }
        public string EthnicityScore { get; set; }

        // D&I Event Section
        public string CalendarLink { get; set; }

        // ERG
        public string ERGText { get; set; }

        // Salary Section
        public string DemoJob { get; set; }
        public string DemoJobSalary { get; set; }
    }
}
