const io = require('socket.io')()

const waitingRoom =
  {
    Players: [],
    Messages: []
  }

  function reset() {
    waitingRoom.Players = [];
    waitingRoom.Messages = [];  
  }

io.on('connection', function (socket) {
  waitingRoom.Players.push({ Name: "Player " + (waitingRoom.Players.length + 1), Socket: socket });

  socket.on('disconnect', function () {
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        waitingRoom.Players.splice(i, 1);
        break;
      }
    }
  })

  socket.on('playerName', function (name) {
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        waitingRoom.Players[i].Name = name;
        break;
      }
    }
  })

  socket.on('sendMessage', function (message) {
    for (i = 0; i < waitingRoom.Players.length; i++) {
      if (waitingRoom.Players[i].Socket === socket) {
        waitingRoom.Messages.push({Name: waitingRoom.Players[i].Name, Message: message});
        break;
      }
    }
    
    io.emit('messages', waitingRoom.Messages);
  })
})


reset()
const port = 1337
io.listen(port)
console.log('Listening on port ' + port + '...')