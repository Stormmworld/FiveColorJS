using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class Phase
    {
        [JsonProperty(PropertyName = "Player")]
        public string CurrentPlayer { get; set; }
        [JsonProperty(PropertyName = "PlayerId")]
        public int CurrentPlayerId { get; set; }
        [JsonProperty(PropertyName = "PhaseName")]
        public Classes.Enumerations.Phase PhaseName { get; set; }
        [JsonProperty(PropertyName = "SubPhaseName")]
        public Classes.Enumerations.SubPhase SubPhaseName { get; set; }
    }
}