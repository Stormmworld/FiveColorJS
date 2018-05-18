using FiveColorApi.Classes;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System;
using FiveColorApi.Classes.Request;

namespace FiveColorApi.Model
{
    public class WaitingRoom
    {
        #region constants
        private static string WaitingRoomKey = "WAITING_ROOM";
        #endregion

        #region Properties
        [JsonProperty(PropertyName = "Games")]
        public List<PendingGame> Games { get; set; }
        [JsonProperty(PropertyName = "Messages")]
        public List<ChatMessage> Messages { get; set; }
        [JsonProperty(PropertyName = "Players")]
        public List<PlayerDetails> Players { get; set; }
        #endregion

        #region Methods
        public void AddGame(CreateGameRequest request)
        {
            PendingGame newGame = new PendingGame(request);
            PlayerDetails player = Players.FirstOrDefault(o => o.Id == request.PlayerId);
            PendingGame activeGame = Games.FirstOrDefault(o => o.Players.Exists(p => p.Id == player.Id));
            if(activeGame != null)
                activeGame.Players.RemoveAll(o => o.Id == player.Id);
            newGame.Players.Add(new GamePlayer(player));
        }
        public void AddMessage(int playerId, string message) {
            PlayerDetails player = Players.FirstOrDefault(o => o.Id == playerId);
            if (player != null)
                Messages.Add(new ChatMessage() { Message=message, PlayerName=player.DisplayName, Timestamp=DateTime.Now.ToString("MM/dd hh:mm") });
        }
        public void AddPlayer(AddChatPlayerRequest request)
        {
            PlayerDetails existingPlayer = Players.FirstOrDefault(o => o.Id == request.Id);
            if (existingPlayer != null)
                existingPlayer.SocketId = request.SocketId;
            else
                Players.Add(new PlayerDetails()
                {
                    DisplayName = request.DisplayName,
                    FirstName = request.FirstName,
                    Id = request.Id,
                    LastName = request.LastName,
                    SocketId = request.SocketId
                });
        }
        public static WaitingRoom GetWaitingRoom()
        {
            return (WaitingRoom)MemoryCacher.GetValue(WaitingRoomKey);
        }
        public void LeaveCurrentGame(int playerId)
        {
            PendingGame activeGame = Games.FirstOrDefault(o => o.Players.Exists(p => p.Id == playerId));
            if (activeGame != null)
                activeGame.Players.RemoveAll(o => o.Id == playerId);
        }
        public void JoinGame(JoinGameRequest request)
        {
            PlayerDetails player = Players.FirstOrDefault(o => o.Id == request.PlayerId);
            if (player != null)
            {
                PendingGame activeGame = Games.FirstOrDefault(o => o.Players.Exists(p => p.Id == request.PlayerId));
                if (activeGame != null)
                    activeGame.Players.RemoveAll(o => o.Id == request.PlayerId);
                PendingGame joinGame = Games.FirstOrDefault(o => o.Id.ToString() == request.GameId);
                if (joinGame != null)
                    joinGame.Players.Add(new GamePlayer(player));
            }
        }
        public void RemovePlayer(int playerId)
        {
            Players.RemoveAll(o => o.Id == playerId);
            PendingGame activeGame = Games.FirstOrDefault(o => o.Players.Exists(p => p.Id == playerId));
            if(activeGame !=null)
                activeGame.Players.RemoveAll(o => o.Id == playerId);
        }
        public void SaveWaitingRoom()
        {
            MemoryCacher.Replace(WaitingRoomKey, this, DateTimeOffset.UtcNow.AddHours(1));
        }
        #endregion
    }
}