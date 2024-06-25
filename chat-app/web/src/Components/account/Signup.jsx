import React, { useState } from "react";
import { performSignup } from "../../service/accountWork.js";

const headDiv = {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

const signUpDiv = {
    backgroundColor: "white",
    height: "75vh",
    width: "60%",
    borderRadius: "5px"
}

const HeadText = {
    fontFamily: "'Allura', cursive",
    textAlign: "center",
    fontSize: "20px",
    paddingTop: "2.5vh",
    paddingBottom: "2.5vh"
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
    name: "",
    username: "",
    email: "",
    phone: "",
    password: ""
}

const SignUpWork = ({ setLogin }) => {
    const [input, setInput] = useState(initialData);

    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
    }

    const handleClick = async(e) => {
        e.preventDefault();

        document.getElementById("name-error").innerText = "";
        document.getElementById("username-error").innerText = "";
        document.getElementById("password-error").innerText = "";
        document.getElementById("email-error").innerText = "";
        document.getElementById("phone-error").innerText = "";

        if (input.name === ""){
            document.getElementById("name-error").innerText = "This field cannot be empty.";
            return;
        }

        if (input.email === ""){
            document.getElementById("email-error").innerText = "This field cannot be empty.";
            return;
        }

        if (input.phone === ""){
            document.getElementById("phone-error").innerText = "This field cannot be empty.";
            return;
        }

        if (input.phone.length > 10 || input.phone.length < 10){
            document.getElementById("phone-error").innerText = "Phone must have only 10 digits.";
            return;
        }

        if (input.username === ""){
            document.getElementById("username-error").innerText = "This field cannot be empty.";
            return;
        }

        if (input.password === ""){
            document.getElementById("password-error").innerText = "This field cannot be empty.";
            return;
        }

        document.getElementById("loader").style.display = "block";

        const result = await performSignup(input);

        document.getElementById("loader").style.display = "none";

        if (result === "Email Already exists."){
            document.getElementById("email-error").innerText = "User with this email already exists.";
        }
        else if (result === "Username Already exists."){
            document.getElementById("username-error").innerText = "User with this username already exists.";
        }
        else if (result === "Phone Number Already exists."){
            document.getElementById("phone-error").innerText = "User with this phone number already exists.";
        }
        else {
            document.getElementById("username-error").innerText = "";
            document.getElementById("email-error").innerText = "";
            document.getElementById("phone-error").innerText = "";
        }
    }

    const handleClickAnother = (e) => {
        e.preventDefault();
        setLogin(true);
    }

    return (
        <div style={headDiv}>
            <div style={signUpDiv}>
                <h4 style={HeadText}>Create your Account</h4>

                <form style={{ width: "80%", margin: "auto", textAlign: "center" }}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                            id="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div id="name-error" style={errorDiv}></div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your Email Address"
                            id="email"
                            value={input.email}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div id="email-error" style={errorDiv}></div>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Phone Number"
                            id="phone"
                            value={input.phone}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div id="phone-error" style={errorDiv}></div>
                    </div>
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
                        <div id="username-error" style={errorDiv}></div>
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
                        <div id="password-error" style={errorDiv}></div>
                    </div>

                    <button style={{ width: "70%", fontWeight: "bold", fontSize: "17px" }} type="submit" className="btn btn-primary" onClick={(e) => handleClick(e)}>Create Account</button>
                    <button style={buttonStyle} className="btn btn-warning" onClick={(e) => handleClickAnother(e)}>Already have an Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpWork;