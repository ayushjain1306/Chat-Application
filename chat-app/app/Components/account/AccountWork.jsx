import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import accountImage from "../../assets/accountImage.jpeg";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

const AcccountWork = () => {
    const [signup, setSignup] = useState(false);

    return (
        <View style={styles.headDiv}>
            <View style={styles.anotherDiv}>
                <Image source={accountImage} style={styles.image} />
            </View>
            {
                signup ? <Signup setSignup={setSignup} /> : <Login setSignup={setSignup} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        backgroundColor: "rgb(9 141 247)",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    image: {
        height: "80%",
        width: "80%",
        margin: "auto"
    },
    anotherDiv: {
        height: "40%",
        width: "100%",
        paddingTop: "10%",
    }
})

export default AcccountWork;