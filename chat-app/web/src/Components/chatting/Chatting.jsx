import React, { useContext, useEffect, useState } from "react";
import { PersonContext } from "../../context/secondPerson.js";
import { useNavigate } from "react-router-dom";
import profilePicture from "../../images/profilePic.jpg";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import getMessages from "../../service/getMessages.js";

const divStyle = {
    margin: "2vh 2vw",
    border: "2px solid white",
    height: "96vh",
    width: "66vw"
}

const headDiv = {
    width: "96%",
    margin: "2vh 2% 0vh 2%",
    height: "10vh",
    backgroundColor: "white",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center"
}

const firstDiv = {
    display: "flex",
    width: "50%",
    alignItems: "center"
}

const secondDiv = {
    display: "flex",
    justifyContent: "right",
    width: "50%"
}

const imageStyle = {
    borderRadius: "50%",
    height: "7vh",
    marginLeft: "2vw"
}

const messageDiv = {
    height: "10vh", 
    marginBottom: "2vh", 
    width: "96%", 
    marginLeft: "2%",
    marginRight: "2%",
}

const Chatting = () => {
    const { secondPerson } = useContext(PersonContext);
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async() => {
            const result = await getMessages(secondPerson._id);

            setMessages(result);
        }

        if (!secondPerson){
            navigate("/account");
        }
        else {
            fetchMessages();
        }
        
    }, [secondPerson, navigate]);

    return (
        secondPerson && <div>
            <div style={divStyle}>
                <div style={headDiv}>
                    <div style={firstDiv}>
                        <img src={secondPerson?.image? secondPerson?.image : profilePicture} alt="profile" style={imageStyle} />
                        <div style={{paddingLeft: "1.5vw"}}>
                            <h5 style={{fontSize: "20px", marginBottom: "4px"}}>{secondPerson?.name}</h5>
                            <h6 style={{fontSize: "15px"}}>@{secondPerson?.username}</h6>
                        </div>
                    </div>
                    <div style={secondDiv}>
                        
                    </div>
                </div>
                <div style={{height: "72vh", marginLeft: "2%", marginRight: "2%"}}>
                    {messages && messages.length > 0 ? <Messages messages={messages} /> : <div></div>}
                </div>
                <div style={messageDiv}>
                    <MessageInput setMessages={setMessages} />
                </div>
            </div>
        </div>
    )
}

export default Chatting;