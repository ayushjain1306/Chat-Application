import React, { useState } from "react";
import { performLogin } from "../../service/accountWork.js";
import { useNavigate } from "react-router-dom";

const headDiv = {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const loginDiv = {
    backgroundColor: "white",
    height: "75vh",
    width: "60%",
    borderRadius: "5px"
}

const HeadText = {
    fontFamily: "'Allura', cursive",
    textAlign: "center",
    fontSize: "25px",
    paddingTop: "4vh",
    paddingBottom: "4vh"
}

const buttonStyle = {
    width: "70%",
    marginTop: "2vh"
}

const errorDiv = {
    color: "red",
    fontSize: "11px"
}

const initialData = {
    username: "",
    password: ""
}

const LoginWork = ({ setLogin }) => {
    const [input, setInput] = useState(initialData);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
    }

    const handleClick = async(e) => {
        e.preventDefault();

        document.getElementById("username-error-login").innerText = "";
        document.getElementById("password-error-login").innerText = "";

        if (input.username === ""){
            document.getElementById("username-error-login").innerText = "This field cannot be empty.";
            return;
        }

        if (input.password === ""){
            document.getElementById("password-error-login").innerText = "This field cannot be empty.";
            return;
        }

        document.getElementById("loader").style.display = "block";

        const result = await performLogin(input);
        
        document.getElementById("loader").style.display = "none";

        if (result === "Username Not Found."){
            document.getElementById("username-error-login").innerText = "Username Not Found.";
        }
        else if (result === "Incorrect Password"){
            document.getElementById("password-error-login").innerText = "Incorrect Password.";
        }
        else {
            document.getElementById("username-error-login").innerText = "";
            document.getElementById("password-error-login").innerText = "";

            if (!result){
                alert("Failed to log in. Try Again Later!");
            }

            if (result === "Login Successful."){
                navigate("/account");
            }
        }

    }

    const handleClickAnother = (e) => {
        e.preventDefault();
        setLogin(false);
    }

    return (
        <div style={headDiv}>
            <div style={loginDiv}>
                <h4 style={HeadText}>Login</h4>

                <form style={{width: "80%", margin: "auto", textAlign: "center"}}>
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter your username" 
                            id="username"
                            value={input.username}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div id="username-error-login" style={errorDiv}></div>
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            className="form-control"
                            placeholder="Enter your password" 
                            id="password"
                            value={input.password}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div id="password-error-login" style={errorDiv}></div>
                    </div>

                    <button style={{width: "70%", fontWeight: "bold", fontSize: "17px"}} type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Log In</button>
                    <button style={buttonStyle} className="btn btn-warning" onClick={(e) => handleClickAnother(e)} >Don't have an account</button>
                </form>
            </div>
        </div>
    )
}

export default LoginWork;