import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import getChats from "../../service/getChats.js";
import { PersonContext } from "../../context/secondPerson.js";
import { ChatContext } from "../../context/chatsContext.js";
import { AnotherLoader } from "../../Loader.jsx";
import profilePic from "../../images/profilePic.jpg";

const divStyle = {
    height: "80vh",
    overflowY: "auto",
    padding: "0vh 2vw 1vh 2vw"
}

const imageStyle = {
    borderRadius: "50%",
    height: "7vh",
    width: "7vh"
}

const noChatDiv = {
    textAlign: "center",
    fontSize: "13px",
    color: "grey"
}

const ChatPart = ({ chats, setChats }) => {
    const [loading, setLoading] = useState(false);
    const { flag } = useContext(ChatContext);
    const { setSecondPerson } = useContext(PersonContext);
    const navigate = useNavigate();

    useEffect(() => {
        const findChats = async () => {
            setLoading(true);
            const result = await getChats();

            if (result) {
                result.sort((a, b) => a.last_time - b.last_time)
                setChats(result);
            }
            setLoading(false);
        }

        findChats();
    }, [flag, setChats]);

    const handleClick = (chat) => {
        setSecondPerson({
            _id: chat?._id,
            name: chat?.name,
            username: chat?.username,
            image: chat?.image
        })

        navigate("/account/chatting")
    }

    return (
        loading ?
            <AnotherLoader />
            :
            chats.length > 0
                ?
                <div style={divStyle}>
                    <table className="table">
                        <tbody>
                            {
                                chats.map((chat) => {
                                    return (
                                        <tr key={chat._id} style={{cursor: "pointer"}} onClick={() => handleClick(chat)}>
                                            <td style={{width: "20%"}}><img src={chat.image ? chat.image : profilePic} style={imageStyle} alt="profile" /></td>
                                            <td style={{width: "80%"}}>
                                                <div>
                                                    <p className="h6" style={{fontSize: "17px", marginBottom: "3px", padding: "0px"}}>{chat?.name}</p>
                                                    <p style={{fontSize: "14px", padding: "0px", margin: "0px", color: "grey"}}>{chat?.last_mes}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
                :
                <div style={noChatDiv}>
                    You haven't chatted yet.
                </div>
    )
}

export default ChatPart;