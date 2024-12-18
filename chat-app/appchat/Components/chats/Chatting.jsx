import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "react-native-axios";
import { URL } from "../../utils/backendURL.js";
import { UserContext } from "../../context/UserProvider.jsx";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../../Loader.jsx";
import Chats from "./Chats.jsx";
import Header from "./Header.jsx";

export default function Chatting() {
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const token = await AsyncStorage.getItem('token');

                if (!token) throw "Token Not Found.";

                const { data } = await axios.get(`${URL}/get-user-data`, { headers: {token} });

                console.log(data);

                setUser(data);
                setLoading(false);
            }
            catch (error) {
                if (error !== "Token Not Found."){
                    await AsyncStorage.removeItem("token");
                }
                setLoading(false);
                navigation.navigate("Get-Started");
            }
        }

        fetchData();
    }, []);

    return (
        <View style={styles.headView}>
            {
                loading && <Loader />
            }
            {
                user && <View>
                    <Header />
                    <Chats />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headView: {
        height: "100%",
        width: "100%",
        backgroundColor: "rgb(9 141 247)"
    },
    headText: {
        
    }
})