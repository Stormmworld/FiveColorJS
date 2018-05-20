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
            Model.PlayerDetails retVal = PlayerRepository.CreatePlayer(request.DisplayName, request.FirstName, request.LastName);
            retVal.SocketId = request.SocketId;
            return retVal;
        }

        [HttpGet]
        public Model.PlayerDetails GetPlayer([FromUri] GetPlayerDetailRequest request)
        {
            Model.PlayerDetails retVal = PlayerRepository.GetPlayer(request.Name);
            retVal.SocketId = request.SocketId;
            return retVal;
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