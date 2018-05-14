using System;
using System.Collections.Generic;
using FiveColorApi.Model;
using Newtonsoft.Json;

namespace FiveColorApi.Classes.Response
{
    public class GameResponse
    {
        #region Properties
        [JsonProperty(PropertyName = "CurrentPhase")]
        public Phase CurrentPhase { get; set; }
        [JsonProperty(PropertyName = "Id")]
        public Guid Id { get; set; }
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "Players")]
        public List<Player> Players { get; set; }
        #endregion

        #region Constructors
        public GameResponse()
        {
        }
        public GameResponse(Game game)
        {
            CurrentPhase = game.Phase;
            Id = game.Id;
            Name = game.Name;
            Players = game.Players;
        }
        #endregion
    }
}