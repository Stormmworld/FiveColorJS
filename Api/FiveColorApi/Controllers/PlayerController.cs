using FiveColorApi.Classes.Request;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FiveColorApi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PlayerController : ApiController
    {
        [HttpGet]
        public Model.PlayerDetails CreatePlayer([FromUri] CreatePlayerDetailRequest request)
        {
            return new Model.PlayerDetails();
        }

        [HttpGet]
        public Model.PlayerDetails GetPlayer([FromUri] GetPlayerDetailRequest request)
        {
            return new Model.PlayerDetails();
        }
    }
}