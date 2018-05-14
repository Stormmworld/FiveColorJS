using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class Rules
    {
        [JsonProperty(PropertyName = "DrawCount")]
        public int DrawCount { get; set; }
        [JsonProperty(PropertyName = "LandsPerTurn")]
        public int LandsPerTurn { get; set; }
        [JsonProperty(PropertyName = "LandsPlayed")]
        public int LandsPlayed { get; set; }
        [JsonProperty(PropertyName = "MaxHandSize")]
        public int MaxHandSize { get; set; }
        [JsonProperty(PropertyName = "ShowLibraryTopCard")]
        public string LibraryTopCardUrl { get; set; }
    }
}