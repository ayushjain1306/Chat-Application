import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import { Loader } from "../../Loader.jsx";

const AcccountWork = ({ navigation }) => {
    const [signup, setSignup] = useState(false);

    return (
        <View style={styles.headDiv}>
            <Loader />
            {
                signup ? <Signup setSignup={setSignup} /> : <Login setSignup={setSignup} navigation={navigation} />
            }

            <View>
                <Text style={styles.backText} onPress={() => navigation.navigate("Get-Started")}>Go Back</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        backgroundColor: "rgb(9 141 247)",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "scroll"
    },
    backText: {
        fontSize: 18,
        color: "white",
        fontWeight: 600,
        marginTop: "6%",
        marginBottom: "6%",
        marginLeft: "10%",
        marginRight: "10%",
        textDecorationLine: "underline",
        textDecorationThickness: 2,
        cursor: "pointer"
    }
})

export default AcccountWork;