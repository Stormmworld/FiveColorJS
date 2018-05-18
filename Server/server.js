const fetch = require('node-fetch');
const io = require('socket.io')()

const waitingRoom =
  {
    Players: [],
    Messages: [],
    Games: []
  }

const ActiveGames = [];

if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
    padString = String((typeof padString !== 'undefined' ? padString : ' '));
    if (this.length > targetLength) {
      return String(this);
    }
    else {
      targetLength = targetLength - this.length;
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this);
    }
  };
}

function reset() {
  waitingRoom.Players = [];
  waitingRoom.Messages = [];
  waitingRoom.Games = [];

}

io.on('connection', function (socket) {
  waitingRoom.Players.push({ Name: "Player " + (waitingRoom.Players.length + 1), SocketId: socket.id, Status: "Lobby", Data: null });

  socket.on('disconnect', function () {
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].SocketId === socket.id) {
        waitingRoom.Players.splice(i, 1);
        break;
      }
    }
    sendChatRoomPlayers();
  })

  socket.on('playerName', function (name) {
    var player = findPlayer(socket.id);
    getPlayerData(name, player);
  })

  socket.on('CreateGame', function (newGame) {
    var player = findPlayer(socket.id);
    newGame.Players = [];
    newGame.Id = guid();
    waitingRoom.Games.push(newGame);
    addPlayerToGame(player, newGame.Id);
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('onCreatePlayer', function (newPlayer) {
    var player = findPlayer(socket.id);
    createNewPlayer(newPlayer.DisplayName, newPlayer.FirstName, newPlayer.LastName, player);
  })

  socket.on('JoinGame', function (gameId) {
    try{
      var player = findPlayer(socket.id);
      if (player.gameId !== undefined && player.gameId !== null) {
        removePlayerFromGame(player);
      }
      addPlayerToGame(player, gameId);
      io.emit('pendingGames', waitingRoom.Games);

    }
    catch(err){
      console.log(err.message);
    }
  })

  socket.on('leaveGame', function (gameName) {
    var player = findPlayer(socket.id);
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
    var player = findPlayer(socket.id);
    waitingRoom.Messages.splice(0, 0, { Name: player.Name, Message: message, Time: time });
    io.emit('messages', waitingRoom.Messages);
  })
})

function sendChatRoomPlayers() {
  io.emit('chatPlayers', waitingRoom.Players); //chatPlayers);
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

function findPlayer(socketid) {
  for (i = 0; i < waitingRoom.Players.length; i++) {
    if (waitingRoom.Players[i].SocketId === socketid) {
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
    if (waitingRoom.Games[i].Id === player.gameId) {
      var index = waitingRoom.Games[i].Players.indexOf(player.Name);
      waitingRoom.Games[i].Players.splice(index, 1);
    }
  }
  player.gameId = null;
}

function getPlayerData(name, player) {
  fetch("http://localhost:5002/api/Player/GetPlayer?Name=" + name)
    .then((resp) => resp.json())
    .then(function (data) {
      //console.log('Received player info: ' + data.toString());
      if (data.DisplayName === "Not Found") {
        io.emit('createPlayer', name);
      }
      else {
        player.Data = data;
        player.Name = data.DisplayName;
        sendChatRoomPlayers();
      }
    })
    .catch(function (e) {
      console.log('error fetching player data' + e);
    });
}

function createNewPlayer(displayName, firstName, lastName, player) {
  //console.log('creating player' + displayName);
  fetch("http://localhost:5002/api/Player/CreatePlayer?DisplayName=" + displayName + "&FirstName=" + firstName + "&LastName=" + lastName)
    .then((resp) => resp.json())
    .then(function (data) {
      if (data.DisplayName === "Not Found") {
        io.emit('createPlayer', name);
      }
      else {
        player.Data = data;
        player.Name = data.DisplayName;
        sendChatRoomPlayers();
      }
    })
    .catch(function (e) {
      console.log('error creating player data' + e);
    });
}

reset()
const port = 5001
io.listen(port)
console.log('Listening on port ' + port + '...')