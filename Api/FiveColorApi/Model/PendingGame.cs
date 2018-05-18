using FiveColorApi.Classes.Enumerations;
using FiveColorApi.Classes.Request;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace FiveColorApi.Model
{
    public class PendingGame
    {
        #region Properties
        [JsonProperty(PropertyName = "Id")]
        public Guid Id {get;set;}
        [JsonProperty(PropertyName = "Format")]
        public Format Format { get; set; }
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "PlayerCount")]
        public int PlayerCount { get; set; }
        [JsonProperty(PropertyName = "Players")]
        public List<GamePlayer> Players { get; set; }
        [JsonProperty(PropertyName = "BaseHitpoints")]
        public int BaseHitpoints { get; set; }
        #endregion

        #region Constructors
        public PendingGame()
        {
            Id = Guid.NewGuid();
            Players = new List<GamePlayer>();
        }
        public PendingGame(CreateGameRequest request) :this()
        {
            Format = request.Format;
            Name = request.Name;
            PlayerCount = request.PlayerCount;
            BaseHitpoints = request.BaseHitpoints;
        }
        #endregion

        #region Method
        #endregion
    }
}