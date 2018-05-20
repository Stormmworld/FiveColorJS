using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FiveColorApi.Classes.Request
{
    public class UpdatePlayerRequest
    {
        public string Name { get; set; }
        public string SocketId {get;set;}
    }
}