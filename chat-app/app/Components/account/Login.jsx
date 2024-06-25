import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import axios from "react-native-axios";

const URL = "http://localhost:8000";

const Login = ({ setSignup }) => {
    const [input, setInput] = useState({username: '', password: ''});

    const handleChange = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
    }

    const handleClick = async() => {
        if (input.username === "" || input.password === ""){
            alert("Please fill all the fields.");
            return;
        }

        try {
            const response = await axios.post(`${URL}/login`, input, { withCredentials: true });
        }
        catch (error){
            console.log(error);
        }
    }

    const handleClickAnother = () => {
        setSignup(true);
    }

    return (
        <View style={styles.headDiv}>
            <Text style={styles.text}>Login</Text>
            <TextInput
                placeholder="Enter your username"
                id="username"
                value={input.username}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />

            <TextInput
                placeholder="Enter your password"
                id="password"
                value={input.password}
                secureTextEntry={true}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />

            <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.buttonStyle, backgroundColor: "white", borderWidth: 1, borderStyle: "solid", borderColor: "rgb(9 141 247)", marginTop: 10 }} onPress={() => handleClickAnother()}>
                <Text style={{...styles.buttonText, color: "rgb(9 141 247)"}}>Don't Have an Account?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        height: "50%",
        backgroundColor: "white",
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 10
    },
    text: {
        fontSize: 25,
        marginBottom: "2%",
        marginTop: "5%",
        fontWeight: "600",
        textAlign: "center"
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

export default Login;