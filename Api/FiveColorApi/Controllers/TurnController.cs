using System.Web.Http;
using FiveColorApi.Classes.Response;

namespace FiveColorApi.Controllers
{
    public class TurnController : ApiController
    {
        [HttpGet]
        public GraveyardResponse GetGraveyard(string gameId, int playerId)
        {

            return new GraveyardResponse();
        }
        [HttpGet]
        public HandResponse GetHand(string gameId, int playerId, int drawCount)
        {

            return new HandResponse();
        }
    }
}