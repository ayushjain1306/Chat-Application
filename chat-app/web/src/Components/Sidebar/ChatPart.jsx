import React, { useState, useEffect } from "react";
import getChats from "../../service/getChats.js";

const ChatPart = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const findChats = async() => {
            const result = await getChats();

            if (result){
                setChats(result);
            }
        }

        findChats();
    }, []);

    return (
        chats.length > 0 
        ? 
        <div>

        </div>
        :
        <div>
        
        </div>
    )
}

export default ChatPart;