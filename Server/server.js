const fetch = require('node-fetch');
const io = require('socket.io')()

io.on('connection', function (socket) {
  //socket.on('disconnect', function (playerId) {
  socket.on('disconnect', function () {
    //console.log('removing player id: ' + socket.id);
    fetch("http://localhost:5002/api/WaitingRoom/RemovePlayer?socketId=" + socket.id)
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
    fetch("http://localhost:5002/api/Player/GetPlayer?Name=" + playerName + "&SocketId=" + socket.id)
      .then((resp) => resp.json())
      .then(function (data) {
        if (data.Success === false) {
          socket.emit('createPlayer', playerName);
        }
        else { socket.emit('PlayerData', data); }
      })
      .catch(function (e) {
        console.log('error logging in player' + e);
      });
  })

  socket.on('AddChatPlayer', function (player) {
    //console.log(player);
    fetch('http://localhost:5002/api/WaitingRoom/AddChatPlayer', {
      method: 'post',
      body: JSON.stringify(player)
    })
      .then((resp) => resp.json())
      .then(function (data) {
        //console.log(data);
        io.emit('chatPlayers', data.WaitingRoom.Players);
        io.emit('pendingGames', data.WaitingRoom.Games);
        io.emit('messages', data.WaitingRoom.Messages);
      })
      .catch(function (e) {
        console.log('error adding player to chat' + e);
      });
  })

  socket.on('CreateGame', function (newGame) {
    fetch('http://localhost:5002/api/WaitingRoom/CreateNewGame', {
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
    fetch("http://localhost:5002/api/Player/CreatePlayer?DisplayName=" + newPlayer.DisplayName + "&FirstName=" + newPlayer.FirstName + "&LastName=" + newPlayer.LastName)
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
        socket.emit('PlayerData', data);
      })
      .catch(function (e) { console.log('error creating player data ' + e); });
  })

  socket.on('JoinGame', function (request) {
    //console.log('Join Game ' + request);
    fetch("http://localhost:5002/api/WaitingRoom/JoinGame?GameId=" + request.GameId + "&PlayerId=" + request.PlayerId)
      .then((resp) => resp.json())
      .then(function (data) { io.emit('pendingGames', data.Games); })
      .catch(function (e) { console.log('error joining game' + e); });;
  })

  socket.on('LeaveGame', function (playerId) {
    fetch("http://localhost:5002/api/WaitingRoom/LeaveCurrentGame?playerId=" + playerId)
      .then((resp) => resp.json())
      .then(function (data) { io.emit('pendingGames', data.Games); })
      .catch(function (e) { console.log('error leaving game' + e); });;
  })

  socket.on('StartGame', function (gameId) {
    //remove game from pending, then send out active game notice to all players
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('sendMessage', function (request) {
    fetch("http://localhost:5002/api/WaitingRoom/AddMessage?Message=" + request.Message + "&PlayerId=" + request.PlayerId)
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
console.log('Listening on port ' + port + '...')