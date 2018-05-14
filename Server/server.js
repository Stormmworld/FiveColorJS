const io = require('socket.io')()

const waitingRoom =
  {
    Players: [],
    Messages: [],
    Games: []
  }

const ActiveGames = [];

function reset() {
  waitingRoom.Players = [];
  waitingRoom.Messages = [];
  waitingRoom.Games = [];

}

io.on('connection', function (socket) {
  waitingRoom.Players.push({ Name: "Player " + (waitingRoom.Players.length + 1), Socket: socket, Status: "Lobby" });

  socket.on('disconnect', function () {
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        waitingRoom.Players.splice(i, 1);
        break;
      }
    }
    sendChatRoomPlayers();
  })

  socket.on('playerName', function (name) {
    var player = findPlayer(socket);
    // for (i = 0; i < waitingRoom.Players.length; i++) {
    //   if (waitingRoom.Players[i].Socket === socket) {
    //     waitingRoom.Players[i].Name = name;
    //     break;
    //   }
    // }
    player.Name = name;
    sendChatRoomPlayers();
  })

  socket.on('CreateGame', function (newGame) {
    var player = findPlayer(socket);
    newGame.Players = [];
    newGame.Id = guid();
    waitingRoom.Games.push(newGame);
    addPlayerToGame(player, newGame.Id);
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('JoinGame', function (gameId) {
    var player = findPlayer(socket);
    if (player.gameId !== undefined && player.gameId !== null) {
      removePlayerFromGame(player);
    }
    addPlayerToGame(player, gameId);
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('leaveGame', function (gameName) {
    var player = findPlayer(socket);
    removePlayerFromGame(player);
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('StartGame', function (gameId) {
    //remove game from pending, then send out active game notice to all players
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('sendMessage', function (message) {
    let date = new Date();
    let time = date.getHours().toString().padStart(2, "0") + ':' + date.getMinutes().toString().padStart(2, "0") + ':' + date.getSeconds().toString().padStart(2, "0");
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        //waitingRoom.Messages.push({Name: waitingRoom.Players[i].Name, Message: message});
        waitingRoom.Messages.splice(0, 0, { Name: waitingRoom.Players[i].Name, Message: message, Time: time });
        break;
      }
    }

    io.emit('messages', waitingRoom.Messages);
  })
})

function sendChatRoomPlayers() {
  let chatPlayers = [];
  for (i = 0; i < waitingRoom.Players.length; i++) {
    if (waitingRoom.Players[i].Status === "Lobby")
      chatPlayers.push(waitingRoom.Players[i].Name);
  }
  io.emit('chatPlayers', chatPlayers);
  io.emit('messages', waitingRoom.Messages);
  io.emit('pendingGames', waitingRoom.Games);
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function findPlayer(socket) {
  for (i = 0; i < waitingRoom.Players.length; i++) {
    if (waitingRoom.Players[i].Socket === socket) {
      return waitingRoom.Players[i]
    }
  }

}

function addPlayerToGame(player, gameId) {
  for (i = 0; i < waitingRoom.Games.length; i++) {
    if (waitingRoom.Games[i].Id === gameId) {
      waitingRoom.Games[i].Players.push(player.Name);
      player.gameId = gameId;
    }
  }
}

function removePlayerFromGame(player) {
  for (i = 0; i < waitingRoom.Games.length; i++) {
    if (waitingRoom.Games[i].Id === gameId) {
      var index = waitingRoom.Games[i].Players.indexOf(player.Name);
      waitingRoom.Games[i].Players.splice(index, 1);
    }
  }
  player.gameId = null;
}

reset()
const port = 1337
io.listen(port)
console.log('Listening on port ' + port + '...')