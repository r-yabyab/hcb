const express = require('express');
const app = express();
const http = require("http");
const { Server } = require('socket.io')
const cors = require('cors')

app.use(cors());

const server = http.createServer(app)

// connect socket.io server with express server
const io = new Server(server, {           //Server is class, so need to do new instance of it
    cors: {   
        origin: "http://localhost:3000",  //which url is making calls to socketserver... where is react server running?
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id)
    })

    socket.on('send_message', (data) => {
        //send to everyone but yourself
        //data was sent to the front end
        socket.broadcast.emit("receive_message", data)
        console.log("Message: ", data)
    })
});


server.listen(3001, () => {     //connects to frontend
    console.log("SERVER IS RUNNING");
})
