using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HackathonSite.Data
{
    public class TuitionStat
    {
        public int Id { get; set; }
        // Foreign Key
        public int CompanyId { get; set; }
        // Quick Sorting
        public int Ordinal { get; set; }
        public string Text { get; set; }
        public string AverageAssistance { get; set; }
        public string AverageCost { get; set; }
    }
}
