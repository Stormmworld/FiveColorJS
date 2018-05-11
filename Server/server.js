const io = require('socket.io')()

const waitingRoom =
  {
    Players: [],
    Messages: [],
    Games: []
  }

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
    waitingRoom.Games.push(newGame);
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


reset()
const port = 1337
io.listen(port)
console.log('Listening on port ' + port + '...')