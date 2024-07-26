import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from "react-native-axios";
import { URL } from "../../utils/backendURL.js";

const Signup = ({ setSignup }) => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    }

    const handleClick = async () => {
        if (input.name === "" || input.email === "" || input.phone === "" || input.username === "" || input.password === ""){
            alert("Please fill all the fields.");
            return;
        }

        try {
            await axios.post(`${URL}/signup`, input);
            setSignup(false);
        }
        catch (error){
            if (error.response.data.message === "Phone Number not available."){
                alert("Account on this Phone Number Already Exists")
            }
            else if (error.response.data.message === "Username not available."){
                alert("User with this Username Already Exists")
            }
            else if (error.response.data.message === "Email not available."){
                alert("Account on this Email Address Already Exists")
            }
            else {
                console.log(error.response.data.message);
                alert("Failed to create account. Try again Later.");
            }
        }
    }

    const handleClickAnother = () => {
        setSignup(false)
    }



    return (
        <View style={styles.headDiv}>
            <Text style={styles.text}>
                Create Account
            </Text>
            <TextInput
                placeholder="Enter your Name"
                id="name"
                value={input.name}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />
            <TextInput
                placeholder="Enter your Email"
                id="email"
                value={input.email}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />
            <TextInput
                placeholder="Enter your Phone Number"
                id="phone"
                value={input.phone}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />
            <TextInput
                placeholder="Create your Username"
                id="username"
                value={input.username}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />
            <TextInput
                placeholder="Create Password"
                id="password"
                value={input.password}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />

            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick()}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: "white", borderWidth: 1, borderStyle: "solid", borderColor: "rgb(9 141 247)", marginTop: 8 }} onPress={() => handleClickAnother()}>
                <Text style={{ ...styles.buttonText, color: "rgb(9 141 247)", fontSize: 16 }}>Already Have an Account?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        height: "75%",
        backgroundColor: "white",
        marginTop: "15%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 10
    },
    text: {
        fontSize: 25,
        marginBottom: "4%",
        marginTop: "5%",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "cursive"
    },
    input: {
        fontSize: 18,
        borderRadius: 5,
        marginTop: 8,
        marginLeft: "8%",
        marginBottom: 15,
        marginRight: "8%",
        paddingTop: 7.5,
        paddingLeft: 7.5,
        paddingBottom: 7.5,
        paddingRight: 7.5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black"
    },
    buttonStyle: {
        color: "white",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "1%",
        marginBottom: "1%",
        width: "60%",
        marginLeft: "20%",
        backgroundColor: "rgb(9 141 247)",
        borderRadius: 4,
        paddingTop: "1%",
        paddingLeft: "5%",
        paddingBottom: "1%",
        paddingRight: "5%"
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    }
})

export default Signup;