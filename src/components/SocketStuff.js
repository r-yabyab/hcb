import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import io from "socket.io-client";
const socket = io.connect('http://localhost:3001');

function SocketStuff () {
    const [message, setMessage] = useState("")
    // message received from other user
    const [messageReceived, setMessageReceived] = useState("")

    const sendMessage = () => {
        socket.emit("send_message", {message})
    }

//fx will run everytime an event is thrown on socketio server
useEffect(() => {
    //callback function, grab data
    socket.on("receive_message", (data) => {
        setMessageReceived(data.message)
    })
}, [socket])

    return (
<>

{/* whenever change in input setMessage...*/}
<input placeholder="Message..." onChange={(event) => {
    setMessage(event.target.value)
}} />
<Button size='sm' variant="outline-dark" className="ml-2" onClick={sendMessage}> Send Message</Button>
<p> Message:</p>
<p> {messageReceived} </p>

</>
    )
}

export default SocketStuff