import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "react-native-axios";
import { URL } from "../../utils/backendURL.js";
import { UserContext } from "../../context/UserProvider.js";

export default function Chatting({ navigation }) {
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${URL}/get-user-data`, { withCredentials: true });

                setUser(data);
            }
            catch (error) {
                navigation.navigate("Login/Signup");
            }
        }

        fetchData();

    }, []);

    return (
        user && <View style={styles.headView}>
            <Text style={styles.headText}>Chatting</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headView: {

    },
    headText: {

    }
})