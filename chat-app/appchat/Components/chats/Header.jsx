import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Keyboard } from 'react-native';
import { UserContext } from "../../context/UserProvider.jsx";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import Search from './Search.jsx';

const Header = () => {
    const [imageOpen, setImageOpen] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const { user } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const keyboardWillShow = Keyboard.addListener('keyboardWillShow', (event) => {
            setKeyboardHeight(event.endCoordinates.height);
        })

        const keyboardWillHide = Keyboard.addListener('keyboardWillHide', (event) => {
            setKeyboardHeight(0);
        })

        return () => {
            keyboardWillShow.remove();
            keyboardWillHide.remove();
        }
    }, []);

    const handleClick = async () => {
        try {
            await AsyncStorage.removeItem("token");

            navigation.navigate('Get-Started');
        }
        catch (error){
            console.log(error);
        }
    }

    return (
        <View style={[styles.headDiv, { height: keyboardHeight ? "50%" : "20%" }]}>
            <View style={styles.anotherDiv}>
                <Text style={styles.headText}>ChatApp</Text>
                <View style={styles.insideDiv}>
                    <Pressable onPress={() => setImageOpen(!imageOpen)}>
                        <Image source={{uri: user.image}} style={styles.image} />
                    </Pressable>
                    <Icon name="ellipsis-v" size={35} color="white" />
                </View>
            </View>
            <Search />
            {
                imageOpen && <View style={styles.imageOpenDiv}>
                    <Pressable style={styles.logOutButton} onPress={handleClick}>
                        <Text style={styles.logOutText}>Log Out</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    headDiv: {
        width: "90%",
        marginHorizontal: "auto",
        paddingTop: 40
    },
    anotherDiv: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        height: "40%"
    },
    headText: {
        color: "white",
        fontSize: 25,
        fontWeight: "600",
        width: "60%"
    },
    insideDiv: {
        width: "40%",
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    imageOpenDiv: {
        backgroundColor: "#e3e3e3",
        position: "absolute",
        width: "50%",
        height: "50%",
        borderRadius: 3,
        top: 130,
        right: 0,
        zIndex: 1,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    logOutButton: {
        backgroundColor: "rgb(9 141 247)",
        width: "70%",
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        borderRadius: 4
    },
    logOutText: {
        color: "white",
        textAlign: "center",
        fontWeight: 'bold'
    }
})

export default Header;