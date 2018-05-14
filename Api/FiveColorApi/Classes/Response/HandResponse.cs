using System.Collections.Generic;
using FiveColorApi.Model;
using Newtonsoft.Json;

namespace FiveColorApi.Classes.Response
{
    public class HandResponse
    {
        [JsonProperty(PropertyName = "Hand")]
        public List<Card> Hand { get; set; }
        [JsonProperty(PropertyName = "MaxHandSize")]
        public int MaxHandSize { get; set; }
    }
}