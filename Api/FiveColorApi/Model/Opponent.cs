using System.Collections.Generic;
using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class Opponent
    {
        [JsonProperty(PropertyName = "Library")]
        public int LibraryCount { get; set; }
        [JsonProperty(PropertyName = "Graveyard")]
        public int GraveYardCount { get; set; }
        [JsonProperty(PropertyName = "HandCount")]
        public int HandCount { get; set; }
        [JsonProperty(PropertyName = "Lands")]
        public List<Card> Lands { get; set; }
        [JsonProperty(PropertyName = "Stats")]
        public Stats Stats { get; set; }
    }
}