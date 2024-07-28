import React, { useState } from "react";
import profilePic from "../../images/profilePic.jpg";

const divStyle = {
    paddingTop: "2.5vh",
    paddingLeft: "1.5vw",
    paddingRight: "1.5vw",
    paddingBottom: "1.5vh",
    height: "20vh"
}

const searchDivStyle = {
    backgroundColor: "#e3e3e3",
    position: "absolute",
    width: "22%",
    top: "15vh"
}

const HeadPart = ({ chats }) => {
    const [input, setInput] = useState("");
    const [filteredChats, setFilteredChats] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);

        if (e.target.value === "") {
            setFilteredChats([]);
        }
        else {
            setFilteredChats(chats.filter((chat) => chat.username.includes(e.target.value)));
        }
    }

    return (
        <div style={divStyle}>
            <h5 style={{ textAlign: "center", marginBottom: "3.5vh" }}>Chats</h5>

            <div className="input-group mb-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Find your chats here"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
            {
                input !== "" &&
                (
                    filteredChats.length > 0
                        ?
                        <div style={searchDivStyle}>
                            {
                                filteredChats.map((chat) => {
                                    return (
                                        <div style={{
                                            display: "flex",
                                            padding: "10px"
                                        }}>
                                            <img src={chat.image ? chat.image : profilePic}  style={{borderRadius: "50%", height: "7vh", width: "7vh"}} alt="profile-pic" />
                                            <div style={{marginLeft: "9px"}}>
                                                <h6 className="h6" style={{marginBottom: "4px"}}>{chat.name}</h6>
                                                <p style={{margin: 0}}>{chat.username}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div style={searchDivStyle}>
                            <p style={{marginTop: "10px", textAlign: "center"}}>No Chat Found.</p>
                        </div>
                )
            }
        </div>
    )
}

export default HeadPart;