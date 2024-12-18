import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

function Loader() {
    return (
        <View style={styles.headDiv}>
            <ActivityIndicator size="large" color="orange" style={{transform: [{scaleX: 2}, {scaleY: 2}]}} />
        </View>
    )
}

const styles = StyleSheet.create({
    headDiv: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
    }
})

export default Loader;