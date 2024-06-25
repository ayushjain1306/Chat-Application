import React, { useState } from "react";

const divStyle = {
    paddingTop: "2.5vh",
    paddingLeft: "1.5vw",
    paddingRight: "1.5vw",
    paddingBottom: "1.5vh",
    height: "20vh"
}

const HeadPart = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        
    }

    return (
        <div style={divStyle}>
            <h5 style={{textAlign: "center", marginBottom: "3.5vh"}}>Chats</h5>
            
            <div className="input-group mb-3">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Find your chats here"
                    value={input}
                    onChange={(e) => handleChange(e)}
                />
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => handleClick()}>Search</button>
            </div>
        </div>
    )
}

export default HeadPart;