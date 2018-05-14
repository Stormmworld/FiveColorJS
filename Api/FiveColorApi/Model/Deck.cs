using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FiveColorApi.Classes.Request;
using FiveColorApi.Classes.Response;
using Newtonsoft.Json;

namespace FiveColorApi.Model
{
    public class Deck
    {
        #region Properties
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "Cards")]
        public List<Card> Cards { get; set; }
        #endregion
    }
}
