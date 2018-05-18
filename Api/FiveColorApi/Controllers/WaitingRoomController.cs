using FiveColorApi.Classes.Request;
using FiveColorApi.Classes.Response;
using FiveColorApi.Model;
using System.Web.Http;

namespace FiveColorApi.Controllers
{
    public class WaitingRoomController : ApiController
    {
        [HttpPost]
        public WaitingRoomMessagesResponse AddMessage([FromUri] ChatMessageRequest request)
        {            
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.AddMessage(request.PlayerId, request.Message);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomMessagesResponse() { Messages = waitingRoom.Messages };
        }
        [HttpPost]
        public WaitingRoomPlayersResponse AddPlayer([FromUri] AddChatPlayerRequest request)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.AddPlayer(request);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomPlayersResponse() { Players = waitingRoom.Players};
        }
        [HttpPost]
        public WaitingRoomGamesResponse CreateNewGame([FromBody] CreateGameRequest request)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.AddGame(request);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomGamesResponse() { Games = waitingRoom.Games};
        }
        [HttpGet]
        public WaitingRoomResponse GetWaitingRoom()
        {
            return new WaitingRoomResponse(WaitingRoom.GetWaitingRoom());
        }
        [HttpPost]
        public WaitingRoomGamesResponse JoinGame([FromUri] JoinGameRequest request)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.JoinGame(request);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomGamesResponse() { Games = waitingRoom.Games };
        }
        [HttpPost]
        public WaitingRoomGamesResponse LeaveCurrentGame([FromUri] int playerId)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.LeaveCurrentGame(playerId);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomGamesResponse() { Games = waitingRoom.Games };
        }
        [HttpPost]
        public WaitingRoomPlayersResponse RemovePlayer(int playerId)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.RemovePlayer(playerId);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomPlayersResponse() { Players = waitingRoom.Players };
        }
    }
}