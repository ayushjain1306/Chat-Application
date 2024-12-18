import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import accountImage from "../../assets/accountImage.jpeg";
import Icon from "react-native-vector-icons/FontAwesome";

export default function WelcomeScreen({ navigation }) {
    const handleClick = () => {
        navigation.navigate("Login/Signup")
    }

    return (
        <View style={style.mainView}>
            <View style={style.insideView}>
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
                            <Text style={style.viewInsideButton}>
                                {"Get Started  "}
                                <Icon name="chevron-right" size={20} color="rgb(9 141 247)" />
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(9 141 247)",
    },
    insideView: {
        width: "97%",
        height: "100%"
    },
    imageView: {
        height: "50%"
    },
    image: {
        height: "55%",
        width: "80%",
        marginTop: "30%",
        marginBottom: "15%",
        marginLeft: "10%",
        marginRight: "10%"
    },
    contentView: {
        height: "50%"
    },
    welcomeText: {
        fontSize: 28,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
    },
    buttonText: {
        width: "50%",
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: "white",
        borderRadius: 3,
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
        marginTop: "8%",
        marginBottom: 0,
        textAlign: "center",
        width: "90%",
        fontSize: 13
    }
})