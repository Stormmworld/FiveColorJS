using System.Collections.Generic;
using FiveColorApi.Classes.Enumerations;
using FiveColorApi.Model;
using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class Player
    {
        [JsonProperty(PropertyName = "BattleField")]
        public List<Card> BattleField { get; set; }
        [JsonProperty(PropertyName = "Library")]
        public List<Card> Library { get; set; }
        [JsonProperty(PropertyName = "LoseCondition")]
        public LoseCondition LoseCondition { get; set; }
        [JsonProperty(PropertyName = "Graveyard")]
        public List<Card> Graveyard { get; set; }
        [JsonProperty(PropertyName = "Hand")]
        public List<Card> Hand { get; set; }
        [JsonProperty(PropertyName = "Lands")]
        public List<Card> Lands { get; set; }
        [JsonProperty(PropertyName = "Manapool")]
        public ManaPool Manapool { get; set; }
        [JsonProperty(PropertyName = "Stats")]
        public Stats Stats { get; set; }
    }
}
