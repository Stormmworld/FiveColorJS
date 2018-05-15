using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FiveColorApi.Classes.Request
{
    public class ModifyPlayerGetPlayerDetailRequest
    {
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}