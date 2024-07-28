import React, { useState } from "react";
import HeadPart from "./HeadPart.jsx";
import ChatPart from "./ChatPart.jsx";

const divStyle = {
    backgroundColor: "whitesmoke",
    height: "100vh",
    width: "25vw"
}

const SideContent = () => {
    const [chats, setChats] = useState([]);

    return (
        <div style={divStyle}>
            <HeadPart chats={chats} />
            <ChatPart chats={chats} setChats={setChats} />
        </div>
    )
}

export default SideContent;