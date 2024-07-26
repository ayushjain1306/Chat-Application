import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import smallLogo from "../../images/smallLogo.png";
import settings from "../../images/settings.png";
import editProfile from "../../images/editProfile.png";
import profilePic from "../../images/profilePic.jpg";
import { UserContext } from "../../context/userContext.js";
import HamburgerMenu from "./HamburgerMenu.jsx";

const headDiv = {
    backgroundColor: "inherit",
    height: "100vh",
    width: "4vw"
}

const upperDiv = {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const lowerDiv = {
    height: "10vh",
    textAlign: "center"
}

const logoStyle = {
    height: "8vh",
    marginTop: "2vh",
}

const personImage = {
    height: "48px",
    borderRadius: "50%",
    width: "48px",
    padding: "5px",
    marginTop: "1.5vh",
    cursor: "pointer"
}

const profileImage = {
    height: "43px",
    width: "43px",
    borderRadius: "50%",
    marginTop: "1vh",
    marginBottom: "1vh",
    position: "relative",
    cursor: "pointer"
}

const settingImage = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
    padding: "5px",
    position: "relative",
    marginTop: "1.5vh",
    cursor: "pointer"
}

const OptionsBar = () => {
    const [open, setOpen] = useState(false);
    const { user } = useContext(UserContext);

    return (
        <div style={headDiv}>
            <div style={upperDiv}>
                <img src={smallLogo} style={logoStyle} alt="logo" />
                <Link to="/account/your-profile"><img src={editProfile} style={personImage} alt="edit-profile" /></Link>
                <Link to="/account/settings"><img src={settings} style={settingImage} alt="settings" /></Link>
            </div>
            <div style={lowerDiv}>
                <img src={user.image ? user.image : profilePic} style={profileImage} alt="profilePic" onClick={() => setOpen(true)} />
            </div>
            {
                open && <HamburgerMenu setOpen={setOpen} />
            }
        </div>
    )
}

export default OptionsBar;