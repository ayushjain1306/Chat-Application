import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'

const Chats = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);

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

    return (
        <View style={[styles.headDiv, { height: keyboardHeight ? "50%" : "80%" }]}>
            <Text>Chats</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 3,
        marginHorizontal: "auto"
    }
})

export default Chats;