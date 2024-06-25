import React, { useState, useContext } from "react";
import camera from "../../images/camera.png";
import send from "../../images/send.png";
import fileUpload from "../../images/folder.png";
import DialogBox from "./DailogBox.jsx";
import { PersonContext } from "../../context/secondPerson.js";
import { ChatContext } from "../../context/chatsContext.js";
import { sendTextMessage } from "../../service/sendMessage.js";
import getMessages from "../../service/getMessages.js";

const headDiv = {
    display: "flex",
    alignItems: "center"
}

const firstDiv = {
    width: "18%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
}

const secondDiv = {
    width: "70%"
}

const thirdDiv = {
    width: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const imageStyle = {
    height: "5vh",
    cursor: "pointer"
}

const MessageInput = ({ setMessages }) => {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);
    const [type, setType] = useState(null);
    const { secondPerson } = useContext(PersonContext);
    const { flag, setFlag } = useContext(ChatContext);

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = async() => {
        if (input === ""){
            return;
        }
        const messageData = {
            reciever_id: secondPerson._id,
            message: input,
            send_time: new Date(Date.now())
        }

        const result = await sendTextMessage(messageData);

        if (result){
            const response = await getMessages(secondPerson._id);

            if (response){
                setMessages(response);
                setFlag(flag+1);
                setInput("");
            }
        }
    }

    return (
        <div style={headDiv}>
            <div style={firstDiv}>
                <img src={camera} alt="camera" style={imageStyle} onClick={() => {setOpen(true); setType("images")}} />
                <img src={fileUpload} alt="file-upload" style={{...imageStyle, height: "9vh"}} onClick={() => {setOpen(true); setType("files")}} />
            </div>
            <div style={secondDiv}>
                <textarea
                    type="text"
                    className="form-control"
                    row='2'
                    value={input}
                    placeholder="Type your message here..."
                    onChange={(e) => handleChange(e)}
                ></textarea>
            </div>
            <div style={thirdDiv}>
                <img src={send} alt="send" style={imageStyle} onClick={() => handleClick()} />
            </div>
            {
                open && <DialogBox open={open} setOpen={setOpen} type={type} setMessages={setMessages} />
            }
        </div>
    )
}

export default MessageInput;