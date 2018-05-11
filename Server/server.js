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
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        waitingRoom.Players[i].Name = name;
        break;
      }
    }
    sendChatRoomPlayers();
  })

  socket.on('CreateGame', function (newGame) {
    newGame.Players = [];
    newGame.Id = guid();
    
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        newGame.Players.push(waitingRoom.Players[i].Name);
        break;
      }
    }
    waitingRoom.Games.push(newGame);
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('JoinGame', function (gameId) {    
    for (i = 0; i < waitingRoom.Games.length; i++){
      if (waitingRoom.Games[i].Id === gameId) {
        for (i = 0; i < waitingRoom.Players.length; i++) {
          if (waitingRoom.Players[i].Socket === socket) {
            waitingRoom.Games[i].Players.push(waitingRoom.Players[i].Name);
            break;
          }
        }
      }
    }   
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('leaveGame', function (gameName) {    
    for (i = 0; i < waitingRoom.Games.length; i++){
      if (waitingRoom.Games[i].Name === gameName) {
        for (i = 0; i < waitingRoom.Players.length; i++) {
          if (waitingRoom.Players[i].Socket === socket) {
            waitingRoom.Games[i].Players.push(waitingRoom.Players[i].Name);
            break;
          }
        }
      }
    }   
    io.emit('pendingGames', waitingRoom.Games);
  })

  socket.on('sendMessage', function (message) {
    let date = new Date();
    let time = date.getHours().toString().padStart(2,"0") + ':'  + date.getMinutes().toString().padStart(2,"0") + ':' + date.getSeconds().toString().padStart(2,"0"); 
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        //waitingRoom.Messages.push({Name: waitingRoom.Players[i].Name, Message: message});
        waitingRoom.Messages.splice(0,0,{Name: waitingRoom.Players[i].Name, Message: message, Time: time});
        break;
      }
    }
    
    io.emit('messages', waitingRoom.Messages);
  })
})

function sendChatRoomPlayers(){
  let chatPlayers = [];
  for (i = 0; i < waitingRoom.Players.length; i++) {
    if(waitingRoom.Players[i].Status==="Lobby")
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

reset()
const port = 1337
io.listen(port)
console.log('Listening on port ' + port + '...')