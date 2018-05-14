using System.Collections.Generic;
using FiveColorApi.Model;
using Newtonsoft.Json;

namespace FiveColorApi.Classes.Response
{
    public class GraveyardResponse
    {
        [JsonProperty(PropertyName = "Hand")]
        public List<Card> Graveyard { get; set; }
    }
}