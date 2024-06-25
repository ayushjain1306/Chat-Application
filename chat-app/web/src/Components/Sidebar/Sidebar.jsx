import React from "react";
import HeadPart from "./HeadPart.jsx";
import ChatPart from "./ChatPart.jsx";

const divStyle = {
    backgroundColor: "whitesmoke",
    height: "100vh",
    width: "25vw"
}

const SideContent = () => {
    return (
        <div style={divStyle}>
            <HeadPart />
            <ChatPart />
        </div>
    )
}

export default SideContent;