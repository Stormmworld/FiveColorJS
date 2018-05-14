using FiveColorApi.Classes.Enumerations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace FiveColorApi.Model
{
    public class Effect
    {
        [JsonProperty(PropertyName = "Optional")]
        public bool Optional { get; set; }
        [JsonProperty(PropertyName = "Triggers")]
        public List<Trigger> Triggers { get; set; }
        [JsonProperty(PropertyName = "TargetOwner")]
        public Owner TargetOwner { get; set; }
        [JsonProperty(PropertyName = "TargetType")]
        public TargetType TargetType { get; set; }
        [JsonProperty(PropertyName = "Action")]
        public Action Action { get; set; }
    }
}