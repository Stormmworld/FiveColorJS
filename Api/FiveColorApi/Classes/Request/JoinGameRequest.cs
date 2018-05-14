using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FiveColorApi.Classes.Request
{
    public class JoinGameRequest
    {
        public string GameId { get; set; }
        public int PlayerId { get; set; }
    }
}