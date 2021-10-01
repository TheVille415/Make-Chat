// chat.js
module.exports = (io, socket) => {

    // Listen for "new user" socket emits
    socket.on('new user', (username) => {
        console.log(`✋ ${username} has joined the chat! ✋`);
        //Send the username to all clients currently connected
        // Notice how the server says io.emit instead of socket.emit.
        // io.emit sends data to all clients on the connection.        
        io.emit("new user", username);
      })
      
  
  }