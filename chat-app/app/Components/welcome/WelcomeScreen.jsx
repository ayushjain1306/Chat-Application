import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import accountImage from "../../assets/accountImage.jpeg";

export default function WelcomeScreen({ navigation }) {
    const handleClick = () => {
        navigation.navigate("Login/Signup")
    }

    return (
        <View style={style.mainView}>
            <View style={style.imageView}>
                <Image source={accountImage} style={style.image} />
            </View>
            <View style={style.contentView}>
                <Text style={style.welcomeText}>Welcome to ChatApp</Text>
                <Text style={style.lineText}>
                    Start chatting with your friends and relatives at your homes, offices or places comfortable for you.
                </Text>
                <View>
                    <Pressable style={style.buttonText} onPress={() => handleClick()}>
                        <Text style={style.viewInsideButton}>Get Started</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const style= StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(9 141 247)"
    },
    imageView: {
        height: "50%",
    },
    image: {
        height: "70%",
        width: "90%",
        marginTop: "15%",
        marginBottom: "15%",
        marginLeft: "5%",
        marginRight: "5%"
    },
    contentView: {
        height: "50%"
    },
    welcomeText: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "cursive",
        color: "white"
    },
    buttonText: {
        width: "44%",
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "white",
        borderRadius: 7,
        margin: "auto",
        marginTop: "20%"
    },
    viewInsideButton: {
        fontSize: 22,
        color: "rgb(9 141 247)",
        fontWeight: "bold",
        textAlign: "center"
    },
    lineText: {
        color: "white",
        margin: "auto",
        marginTop: "4%",
        marginBottom: 0,
        textAlign: "justify",
        width: "80%",
        fontSize: 13,
        fontWeight: "bold"
    }
})