using FiveColorApi.Classes.Request;
using System.Web.Http;
using System.Web.Http.Cors;
using FiveColorApi.Repository;

namespace FiveColorApi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class PlayerController : ApiController
    {
        [HttpGet]
        public Model.PlayerDetails CreatePlayer([FromUri] CreatePlayerDetailRequest request)
        {
            return PlayerRepository.CreatePlayer(request.DisplayName, request.FirstName, request.LastName);
        }

        //http://localhost:5000/api/Player/GetPlayer?Name=stormm
        [HttpGet]
        public Model.PlayerDetails GetPlayer([FromUri] GetPlayerDetailRequest request)
        {
            return PlayerRepository.GetPlayer(request.Name);
        }

        [HttpGet]
        public Model.PlayerDetails ModifyPlayer([FromUri] ModifyPlayerGetPlayerDetailRequest request)
        {
            return PlayerRepository.ModifyPlayer(request.Id, request.DisplayName, request.FirstName, request.LastName);
        }

        [HttpGet]
        public void RemovePlayer([FromUri] RemovePlayerDetailRequest request)
        {
            PlayerRepository.RemovePlayer(request.Id);
        }
    }
}