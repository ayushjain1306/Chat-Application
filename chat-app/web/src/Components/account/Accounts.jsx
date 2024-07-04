import React, { useState } from "react";
import LoginWork from "./Login.jsx";
import SignUpWork from "./Signup.jsx";
import accountImage from "../../images/accountImage.jpeg";

const divStyle = {
    backgroundColor: "rgb(9 141 247)",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center"
}

const Image = {
    height: "60vh",
    width: "80%"
}

const AccountWork = () => {
    const [login, setLogin] = useState(true);

    return (
        <div style={divStyle}>
            <div style={{width: "50%", textAlign: "center"}}>
                <img src={accountImage} alt="account" style={Image} />
            </div>
            {
                login ? <LoginWork login={login} setLogin={setLogin} /> : <SignUpWork login={login} setLogin={setLogin} />
            }
        </div>
    )
}

export default AccountWork;