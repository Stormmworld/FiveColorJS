using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FiveColorApi.Classes.Enumerations;

namespace FiveColorApi.Classes.Response
{
    public class GetDecksResponse
    {
        public List<DeckSummary> Decks { get; set; }

        public GetDecksResponse() {
            Decks = new List<DeckSummary>();
        }
    }

    public class DeckSummary
    {
        public string Name { get; set; }
        public long Id { get; set; }
        public List<Format> Formats { get; set; }
    }
}