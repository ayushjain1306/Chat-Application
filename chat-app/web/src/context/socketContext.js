import React, { useState, useEffect, createContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socketInstance = io("http://localhost:8000");

        setSocket(socketInstance);
    }, []);

    return (
        <SocketContext.Provider value={ socket }>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketContext, SocketProvider };