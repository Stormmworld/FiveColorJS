using FiveColorApi.Model;
using System.Collections.Generic;

namespace FiveColorApi.Classes.Response
{
    public class WaitingRoomGamesResponse
    {
        public List<PendingGame> Games { get; set; }
    }
}