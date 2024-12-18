import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard } from "react-native";
import axios from "react-native-axios";
import { URL } from "../../utils/backendURL.js";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import Loader from "../../Loader.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Login = ({ setSignup }) => {
    const [input, setInput] = useState({username: '', password: ''});
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation()

    const handleChangeText = (key, text) => {
        setInput({...input, [key]: text});
    }

    const handleClick = async() => {
        Keyboard.dismiss();
        if (input.username === "" || input.password === ""){
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: "Error",
                textBody: "Please fill all the fields.",
                button: "OK"
            })
            return;
        }

        setLoading(true);

        console.log(input);

        try {
            const { data } = await axios.post(`${URL}/login`, input);

            await AsyncStorage.setItem('token', data.token);

            navigation.navigate("Chats");

            setLoading(false);
        }
        catch (error){
            setLoading(false);
            setInput({ ...input, password: "" })
            console.log(error);
            if (error.response.data.message === "Username not found." || error.response.data.message === "Incorrect password"){
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "Invalid Credentials.",
                    button: "OK"
                })
            }
            else {
                console.log(error.response.data.message);
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: "Error",
                    textBody: "Failed to Log In. Try Again Later.",
                    button: "OK"
                })
            }
        }
    }

    const handleClickAnother = () => {
        setSignup(true);
    }

    return (
        <View style={styles.headDiv}>
            {
                loading && <Loader loading={loading} />
            }
            <Text style={styles.text}>Login</Text>
            <TextInput
                placeholder="Enter your username"
                id="username"
                value={input.username}
                style={styles.input}
                onChangeText={(text) => handleChangeText("username", text)}
            />

            <TextInput
                placeholder="Enter your password"
                id="password"
                value={input.password}
                secureTextEntry={true}
                style={styles.input}
                onChangeText={(text) => handleChangeText("password", text)}
            />

            <Pressable style={styles.buttonStyle} onPress={() => handleClick()}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Pressable style={{...styles.buttonStyle, backgroundColor: "white", borderWidth: 1, borderStyle: "solid", borderColor: "rgb(9 141 247)", marginTop: 10 }} onPress={() => handleClickAnother()}>
                <Text style={{...styles.buttonText, color: "rgb(9 141 247)"}}>Don't Have an Account?</Text>
            </Pressable>
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

export default Login;