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
  Players.push({ Name: "Player " + (Players.length + 1), Socket: socket });

  socket.on('disconnect', function () {
    for (i = 0; i < Player.length; i++) {
      if (Player[i].Socket === socket) {
        Players.splice(i, 1);
        break;
      }
    }
  })

  socket.on('playerName', function (name) {
    for (i = 0; i < Player.length; i++) {
      if (Player[i].Socket === socket) {
        Players[i].Name = name;
        break;
      }
    }
  })

  socket.on('sendMessage', function (message) {
    for (i = 0; i < Player.length; i++) {
      if (Player[i].Socket === socket) {
        Messages.push({Name: Player[i].Name, message});
        break;
      }
    }
    
    io.emit('messages', Messages);
  })
})


reset()
const port = 1337
io.listen(port)
console.log('Listening on port ' + port + '...')