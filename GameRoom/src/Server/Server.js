const fetch = require('node-fetch');
const io = require('socket.io')()
const apiPath = "http://localhost:5002";
//const apiPath = "http://localhost/FiveColorApi";
//const apiPath = "http://fivecolor.servehttp.com/FiveColorApi";

io.on('connection', function (socket) {
  //socket.on('disconnect', function (playerId) {
  socket.on('disconnect', function () {
    //console.log('removing player id: ' + socket.id);
    fetch(apiPath + "/api/WaitingRoom/RemovePlayer?socketId=" + socket.id)
      .then((resp) => resp.json())
      .then(function (data) {
        //console.log('remaining players' + data.Players);
        io.emit('chatPlayers', data.Players);
      }
      )
      .catch(function (e) { console.log('error fetching player data' + e); });
  })

  socket.on('LogIn', function (playerName) {
    //console.log(playerName);
    fetch(apiPath + "/api/Player/GetPlayer?Name=" + playerName + "&SocketId=" + socket.id)
      .then((resp) => resp.json())
      .then(function (data) {
        if (data.Success === false) {
          socket.emit('createPlayer', playerName);
        }
        else {
          //console.log(JSON.stringify(data));
          socket.emit('PlayerData', data); 
          }
      })
      .catch(function (e) {
        console.log('error logging in player' + e);
      });
  })

  socket.on('AddChatPlayer', function (player) {
    --console.log(player);
    fetch(apiPath + '/api/WaitingRoom/AddChatPlayer', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(player)
    })
      .then((resp) => resp.json())
      .then(function (data) {
        --console.log(data);
        io.emit('chatPlayers', data.WaitingRoom.Players);
        io.emit('pendingGames', data.WaitingRoom.Games);
        io.emit('messages', data.WaitingRoom.Messages);
      })
      .catch(function (e) {
        console.log('error adding player to chat' + e);
      });
  })

  socket.on('CreateGame', function (newGame) {
    fetch(apiPath + '/api/WaitingRoom/CreateNewGame', {
      method: 'post',
      body: JSON.stringify(newGame)
    })
      .then((resp) => resp.json())
      .then(function (data) {
        //console.log(data);
        io.emit('pendingGames', data.Games);
      })
      .catch(function (e) { console.log('error creating game ' + e); });;
  })

  socket.on('onCreatePlayer', function (newPlayer) {
    fetch(apiPath + "/api/Player/CreatePlayer?DisplayName=" + newPlayer.DisplayName + "&FirstName=" + newPlayer.FirstName + "&LastName=" + newPlayer.LastName)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        socket.emit('PlayerData', data);
      })
      .catch(function (e) { console.log('error creating player data ' + e); });
  })

  socket.on('JoinGame', function (request) {
    //console.log('Join Game ' + request);
    fetch(apiPath + "/api/WaitingRoom/JoinGame?GameId=" + request.GameId + "&PlayerId=" + request.PlayerId)
      .then((resp) => resp.json())
      .then(function (data) { io.emit('pendingGames', data.Games); })
      .catch(function (e) { console.log('error joining game' + e); });;
  })

  socket.on('LeaveGame', function (playerId) {
    fetch(apiPath + "/api/WaitingRoom/LeaveCurrentGame?playerId=" + playerId)
      .then((resp) => resp.json())
      .then(function (data) { io.emit('pendingGames', data.Games); })
      .catch(function (e) { console.log('error leaving game' + e); });
  })

  socket.on('ReadyGame', function (request) {
    fetch(apiPath + '/api/WaitingRoom/CreateNewGame', {
      method: 'post',
      body: JSON.stringify(request)
    })
      .then((resp) => resp.json())
      .then(function (data) { 
        io.emit('chatPlayers', data.WaitingRoom.Players);
        io.emit('pendingGames', data.WaitingRoom.Games);
        io.emit('messages', data.WaitingRoom.Messages);
      })
      .catch(function (e) { console.log('error leaving game' + e); });
  })

  socket.on('sendMessage', function (request) {
    fetch(apiPath + "/api/WaitingRoom/AddMessage?Message=" + request.Message + "&PlayerId=" + request.PlayerId)
      .then((resp) => resp.json())
      .then(function (data) {
        //console.log('Messages: ' + JSON.stringify(data));
        io.emit('messages', data.Messages);
      })
      .catch(function (e) { console.log('error adding newmessage' + e); });;
  })
})

const port = 5001
io.listen(port)
console.log('Socket Middleware on port ' + port + '...')