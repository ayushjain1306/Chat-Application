import React, { useContext, useRef, useEffect, useState } from "react";
import { PersonContext } from "../../context/secondPerson.js";
import { List, ListItem } from "@mui/material";
import downloadImage from "../../images/downloadImage.png";

const messageStyle = {
    backgroundColor: "white",
    maxWidth: "40%",
    padding: "7px 14px",
    borderRadius: "5px"
}

const imageMessageStyle = {
    backgroundColor: "white",
    padding: "7px 14px",
    borderRadius: "5px"
}

const imageStyle = {
    height: "200px",
    width: "200px"
}

const fileMessageStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    width: "35%"
}

const fileImageStyle = {
    width: "20%",
    marginLeft: "1%",
    marginRight: "1%",
    borderRadius: "50%",
    cursor: "pointer"
}

const dateDiv = {
    margin: "auto",
    width: "15%",
    backgroundColor: "white",
    borderRadius: "5px",
    textAlign: "center",
    paddingTop: "4px",
    paddingBottom: "4px"
}

const pStyle = {
    marginBottom: "0px",
    textAlign: "right",
    fontSize: "13px",
    color: "grey"
}

const Messages = ({ messages }) => {
    const { secondPerson } = useContext(PersonContext);
    const divRef = useRef(null);
    const [messageId, setMessageId] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
    }, [messages]);

    const dateArray = [null];
    let flag = false;

    const today = new Date(Date.now());
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    messages.sort((a, b) => new Date(a.send_time) - new Date(b.send_time))

    const handleDownload = (fileUrl, fileName) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.target = "_blank_"
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="all-messages" style={{
            width: "100%",
            height: "72vh",
            overflowY: "auto",
            overflowX: "hidden"
        }} ref={divRef}>
            {
                <List id="message-list">
                    {
                        messages.map((message) => {
                            const current = new Date(message.send_time);

                            if (dateArray[0] === null || dateArray[0] !== message.send_time.substring(0, 10)) {
                                dateArray[0] = message.send_time.substring(0, 10);
                                flag = true;
                            }
                            else {
                                flag = false;
                            }

                            return (
                                message.type === "images" || message.type === "image" ?
                                    <div key={message._id}>
                                        {
                                            flag && <div style={{marginTop: "10px", marginBottom: "10px"}}><div style={dateDiv}>{(
                                                today.getDate() === current.getDate() &&
                                                today.getMonth() + 1 === current.getMonth() + 1 &&
                                                today.getFullYear() === current.getFullYear()
                                            ) ? "Today" : (
                                                yesterday.getDate() === current.getDate() &&
                                                yesterday.getMonth() + 1 === current.getMonth() + 1 &&
                                                yesterday.getFullYear() === current.getFullYear()
                                            ) ? "Yesterday" : dateArray[0]}</div></div>
                                        }
                                        <ListItem style={{
                                            display: "flex",
                                            justifyContent: message.sender_id === secondPerson._id ? "left" : "right"
                                        }}>

                                            <div style={{...imageMessageStyle}}>
                                                <img src={message.message} alt="message" style={imageStyle} />
                                                <p style={pStyle}>{`${String(current.getHours()).padStart(2, '0')}:${String(current.getMinutes()).padStart(2, '0')}`}</p>
                                            </div>
                                        </ListItem>
                                    </div>
                                    :
                                    message.type === "files" ?
                                        <div key={message._id}>
                                            {
                                                flag && <div style={{marginTop: "10px", marginBottom: "10px"}}><div style={dateDiv}>{(
                                                    today.getDate() === current.getDate() &&
                                                    today.getMonth() + 1 === current.getMonth() + 1 &&
                                                    today.getFullYear() === current.getFullYear()
                                                ) ? "Today" : (
                                                    yesterday.getDate() === current.getDate() &&
                                                    yesterday.getMonth() + 1 === current.getMonth() + 1 &&
                                                    yesterday.getFullYear() === current.getFullYear()
                                                ) ? "Yesterday" : dateArray[0]}</div></div>
                                            }
                                            <ListItem style={{
                                                display: "flex",
                                                justifyContent: message.sender_id === secondPerson._id ? "left" : "right"
                                            }}>

                                                <div style={{...fileMessageStyle}}>
                                                    <img src={downloadImage} alt="document" style={fileImageStyle} onClick={() => handleDownload(message.message, message.message.substring(80))} />
                                                    <hr style={{
                                                        border: "1px solid grey",
                                                        height: "63px",
                                                        margin: "0px 15px 0px 0px"
                                                    }} />
                                                    {message.message.substring(80)}
                                                    <p style={{ ...pStyle, marginTop: "16px", marginRight: "5px" }}>{`${String(current.getHours()).padStart(2, '0')}:${String(current.getMinutes()).padStart(2, '0')}`}</p>
                                                </div>
                                            </ListItem>
                                        </div>
                                        :
                                        <div key={message._id}>
                                            {
                                                flag && <div style={{marginTop: "10px", marginBottom: "10px"}}><div style={dateDiv}>{(
                                                    today.getDate() === current.getDate() &&
                                                    today.getMonth() + 1 === current.getMonth() + 1 &&
                                                    today.getFullYear() === current.getFullYear()
                                                ) ? "Today" : (
                                                    yesterday.getDate() === current.getDate() &&
                                                    yesterday.getMonth() + 1 === current.getMonth() + 1 &&
                                                    yesterday.getFullYear() === current.getFullYear()
                                                ) ? "Yesterday" : dateArray[0]}</div></div>
                                            }
                                            <ListItem style={{
                                                display: "flex",
                                                justifyContent: message.sender_id === secondPerson._id ? "left" : "right"
                                            }}>

                                                <div style={{...messageStyle}}>
                                                    {message.message}
                                                    <p style={pStyle}>{`${String(current.getHours()).padStart(2, '0')}:${String(current.getMinutes()).padStart(2, '0')}`}</p>
                                                </div>
                                            </ListItem>
                                        </div>
                            )
                        })
                    }
                </List>
            }
        </div>
    )
}

export default Messages;