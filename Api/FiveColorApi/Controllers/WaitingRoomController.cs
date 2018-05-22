using FiveColorApi.Classes.Request;
using FiveColorApi.Classes.Response;
using FiveColorApi.Model;
using System.Web.Http;

namespace FiveColorApi.Controllers
{
    public class WaitingRoomController : ApiController
    {
        [HttpGet]
        public WaitingRoomMessagesResponse AddMessage([FromUri] ChatMessageRequest request)
        {            
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.AddMessage(request.PlayerId, request.Message);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomMessagesResponse() { Messages = waitingRoom.Messages };
        }
        [HttpPost]
        public WaitingRoomResponse AddChatPlayer([FromBody] AddChatPlayerRequest request)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.AddPlayer(request);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomResponse() { WaitingRoom = waitingRoom };
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
            return new WaitingRoomResponse() { WaitingRoom=WaitingRoom.GetWaitingRoom() };
        }
        [HttpGet]
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
        [HttpGet]
        public WaitingRoomPlayersResponse RemovePlayer([FromUri] string socketId)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.RemovePlayer(socketId);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomPlayersResponse() { Players = waitingRoom.Players };
        }
        [HttpPost]
        public WaitingRoomPlayersResponse UpdatePlayer(UpdatePlayerRequest request)
        {
            WaitingRoom waitingRoom = WaitingRoom.GetWaitingRoom();
            waitingRoom.UpdatePlayer(request);
            waitingRoom.SaveWaitingRoom();
            return new WaitingRoomPlayersResponse() { Players = waitingRoom.Players };
        }

    }
}