using FiveColorApi.Classes;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System;
using FiveColorApi.Classes.Request;
using FiveColorApi.Repository;

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

        #region Constructors
        public WaitingRoom()
        {
            Games = new List<PendingGame>();
            Messages = new List<ChatMessage>();
            Players = new List<PlayerDetails>();
        }
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
            Games.Add(newGame);
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
            WaitingRoom retVal = (WaitingRoom)MemoryCacher.GetValue(WaitingRoomKey);
            if (retVal == null)
                retVal = new WaitingRoom();
            return retVal;
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
        public void RemovePlayer(string socketId)
        {
            Players.RemoveAll(o => o.SocketId == socketId);
            PendingGame activeGame = Games.FirstOrDefault(o => o.Players.Exists(p => p.SocketId == socketId));
            if(activeGame !=null)
                activeGame.Players.RemoveAll(o => o.SocketId == socketId);
        }
        public void SaveWaitingRoom()
        {
            MemoryCacher.Replace(WaitingRoomKey, this, DateTimeOffset.UtcNow.AddHours(1));
        }
        public void UpdatePlayer(UpdatePlayerRequest request)
        {
            PlayerDetails player = Players.FirstOrDefault(o => o.SocketId == request.SocketId);
            if (player != null)
            {
                PlayerDetails dbPlayer = PlayerRepository.GetPlayer(request.Name);
                if (dbPlayer.DisplayName == "Not Found")
                    throw new Exception("Player not found in database");
                player.DisplayName = dbPlayer.DisplayName;
                player.FirstName = dbPlayer.FirstName;
                player.Id = dbPlayer.Id;
                player.LastName = dbPlayer.LastName;
            }
        }
        #endregion
    }
}