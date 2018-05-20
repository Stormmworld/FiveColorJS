using FiveColorApi.Model;
using System.Collections.Generic;

namespace FiveColorApi.Classes.Response
{
    public class WaitingRoomPlayersResponse
    {
        public bool Success {get;set;}
        public List<PlayerDetails> Players { get; set; }
    }
}