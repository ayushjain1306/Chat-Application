import React, { useContext } from "react";
import profilePic from "../../images/profilePic.jpg";
import { UserContext } from "../../context/userContext";
import { performLogout } from "../../service/accountWork.js";

const divStyle = {
    position: "absolute",
    bottom: "1vh",
    width: "15vw",
    height: "27vh",
    backgroundColor: "#e3e3e3",
    textAlign: "center",
    left: "4vw",
    borderRadius: "10px"
}

const mainButtonStyle = {
    width: "12vw",
    marginTop: "2vh",
    marginBottom: "1.5vh"
}

const closeButtonStyle = {
    width: "12vw"
}

const imageStyle = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    marginTop: "2vh"
}

const HamburgerMenu = ({setOpen}) => {
    const { user } = useContext(UserContext);

    const handleClick = async () => {
        const response = await performLogout();

        if (response){
            window.location.href = "/";
        }
        else {
            alert("Failed. Try Again Later!")
        }
    }
    
    return (
        <div style={divStyle}>
            <img src={user?.image ? user?.image : profilePic} alt="profile-pic" style={imageStyle} /><br/>
            <button className="btn btn-primary" style={mainButtonStyle} onClick={() => handleClick()}>Log Out</button>
            <button className="btn btn-secondary" onClick={() => setOpen(false)} style={closeButtonStyle}>Close</button>
        </div>
    )
}

export default HamburgerMenu;