import React, { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity, Keyboard, StyleSheet } from "react-native";
import axios from "react-native-axios";
import { URL } from "../../utils/backendURL.js";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import Loader from "../../Loader.jsx";

const Signup = ({ setSignup }) => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        phone: ""
    })
    const [loading, setLoading] = useState(false);

    const handleChangeText = (key, text) => {
        setInput({ ...input, [key]: text });
    }

    const handleClick = async () => {
        Keyboard.dismiss();
        if (input.name === "" || input.email === "" || input.phone === "" || input.username === "" || input.password === "") {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error",
                textBody: "Please fill all the fields.",
                button: "OK"
            })
            return;
        }

        setLoading(true);

        try {
            await axios.post(`${URL}/signup`, input);
            setLoading(false);

            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Success",
                textBody: "User Registration Completed Successfully.",
                button: "OK"
            })

            setSignup(false);
        }
        catch (error) {
            setLoading(false);
            if (error.response.data.message === "Phone Number not available.") {
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "Account on this Phone Number Already Exists.",
                    button: "OK"
                })
            }
            else if (error.response.data.message === "Username not available.") {
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "User with this Username Already Exists",
                    button: "OK"
                })
            }
            else if (error.response.data.message === "Email not available.") {
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "Account on this Email Address Already Exists",
                    button: "OK"
                })
            }
            else {
                console.log(error.response.data.message);
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "Failed to create account. Try again Later.",
                    button: "OK"
                })
            }
        }
    }

    const handleClickAnother = () => {
        setSignup(false)
    }

    return (
        <View style={styles.headDiv}>
            {
                loading && <Loader loading={loading} />
            }
            <Text style={styles.text}>
                Create Account
            </Text>
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                <TextInput
                    placeholder="Enter your Name"
                    id="name"
                    value={input.name}
                    style={styles.input}
                    onChangeText={(text) => handleChangeText("name", text)}
                />
                <TextInput
                    placeholder="Enter your Email"
                    id="email"
                    value={input.email}
                    style={styles.input}
                    onChangeText={(text) => handleChangeText("email", text)}
                />
                <TextInput
                    placeholder="Enter your Phone Number"
                    id="phone"
                    value={input.phone}
                    style={styles.input}
                    onChangeText={(text) => handleChangeText("phone", text)}
                />
                <TextInput
                    placeholder="Create your Username"
                    id="username"
                    value={input.username}
                    style={styles.input}
                    onChangeText={(text) => handleChangeText("username", text)}
                />
                <TextInput
                    placeholder="Create Password"
                    secureTextEntry={true}
                    id="password"
                    value={input.password}
                    style={styles.input}
                    onChangeText={(text) => handleChangeText("password", text)}
                />

                <TouchableOpacity style={styles.buttonStyle} onPress={() => handleClick()}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.buttonStyle, backgroundColor: "white", borderWidth: 1, borderStyle: "solid", borderColor: "rgb(9 141 247)", marginTop: 8 }} onPress={() => handleClickAnother()}>
                    <Text style={{ ...styles.buttonText, color: "rgb(9 141 247)", fontSize: 16 }}>Already Have an Account?</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        height: "75%",
        backgroundColor: "white",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 4,
        overflowY: "auto",
        marginTop: "15%",
    },
    text: {
        fontSize: 25,
        marginBottom: "10.7%",
        marginTop: "5%",
        fontWeight: "600",
        textAlign: "center"
    },
    input: {
        fontSize: 18,
        borderRadius: 3,
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
        margin: "auto",
        marginTop: "1%",
        marginBottom: "1%",
        width: "70%",
        backgroundColor: "rgb(9 141 247)",
        borderRadius: 4,
        paddingTop: "2%",
        paddingLeft: "5%",
        paddingBottom: "3%",
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