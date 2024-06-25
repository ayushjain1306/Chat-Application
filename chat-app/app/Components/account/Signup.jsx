import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

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

    const handleClick = () => {
        
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
                value={input.username}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />
            <TextInput
                placeholder="Enter your Email"
                id="email"
                value={input.username}
                style={styles.input}
                onChange={(e) => handleChange(e)}
            />
            <TextInput
                placeholder="Enter your Phone Number"
                id="phone"
                value={input.username}
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
                value={input.username}
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
        height: "53%",
        backgroundColor: "white",
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 10
    },
    text: {
        fontSize: 22,
        marginBottom: "2%",
        marginTop: "4%",
        fontWeight: "600",
        textAlign: "center"
    },
    input: {
        fontSize: 14,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: "8%",
        marginBottom: 7,
        marginRight: "8%",
        paddingTop: 5,
        paddingLeft: 7.5,
        paddingBottom: 5,
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