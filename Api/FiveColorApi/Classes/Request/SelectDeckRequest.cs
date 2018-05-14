using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FiveColorApi.Classes.Request
{
    public class SelectDeckRequest
    {
        public long DeckId { get; set; }
        public string GameId { get; set; }
        public int PlayerId { get; set; }
    }
}