namespace HackathonSite.Data
{
    public class SalaryItem
    {
        // just ignore this
        public int Id { get; set; }

        public string Job { get; set; }
        public string Gender { get; set; }
        public string Ethnicity { get; set; }
        public string State { get; set; }

        public decimal TotalSalary
        {
            get
            {
                return Salary + Bonus;
            }
        }
        public decimal Salary { get; set; }
        public decimal Bonus { get; set; }
        public string GetBonus { get; set; }
    }
}
