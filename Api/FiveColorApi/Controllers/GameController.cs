using System;
using System.Collections.Generic;
using System.Web.Http;
using FiveColorApi.Classes;
using FiveColorApi.Classes.Enumerations;
using FiveColorApi.Classes.Request;
using FiveColorApi.Classes.Response;
using FiveColorApi.Model;
using Phase = FiveColorApi.Model.Phase;

namespace FiveColorApi.Controllers
{
    public class GameController : ApiController
    {
        [HttpGet]
        public GameResponse CreateGame([FromUri] CreateGameRequest request)
        {
            Game newGame = new Game()
            {
                Phase = new Phase(),
                Id = Guid.NewGuid(),
                Name = request.Name,
                Status = Status.WaitingRoom
            };
            MemoryCacher.Replace(newGame.Id.ToString(), newGame, DateTimeOffset.UtcNow.AddHours(1));
            return new GameResponse(newGame);
        }
        [HttpGet]
        public GameResponse EndCurrentPhase([FromUri] EndPhaseRequest request)
        {
            Game game = (Game)MemoryCacher.GetValue(request.GameId);

            #region Check for events that happen at end of current phase

            #endregion

            game.EndPhase();

            #region Check for events that happen at beginning of new phase
            if (game.Phase.SubPhaseName == SubPhase.Draw)
                game.DrawPhase();
            #endregion

            MemoryCacher.Replace(game.Id.ToString(), game, DateTimeOffset.UtcNow.AddHours(1));
            return new GameResponse(game);
        }
        [HttpGet]
        public GameResponse JoinGame([FromUri] JoinGameRequest request)
        {
            Game game = (Game)MemoryCacher.GetValue(request.GameId);
            MemoryCacher.Replace(game.Id.ToString(), game, DateTimeOffset.UtcNow.AddHours(1));
            return new GameResponse(game);
        }
        [HttpGet]
        public GameResponse RetrieveGame([FromUri] RetrieveGameRequest request)
        {
            Game game = (Game)MemoryCacher.GetValue(request.Id);

            return new GameResponse(game);
        }
        [HttpGet]
        public GameResponse SelectDeck([FromUri] SelectDeckRequest request)
        {
            Game game = (Game)MemoryCacher.GetValue(request.GameId);

            game.Selectdeck(request.PlayerId, request.DeckId);

            MemoryCacher.Replace(game.Id.ToString(), game, DateTimeOffset.UtcNow.AddHours(1));

            return new GameResponse(game);
        }
        [HttpGet]
        public GameResponse StartGame([FromUri] SelectDeckRequest request)
        {
            Game game = (Game)MemoryCacher.GetValue(request.GameId);
            game.Status = Status.Active;
            return new GameResponse(game);
        }
    }
}