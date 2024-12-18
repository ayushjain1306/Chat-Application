import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';

const Search = () => {
    const [username, setUsername] = useState("");

    const handleChangeText = (text) => {
        setUsername(text);
    }

    return (
        <View style={styles.searchView}>
            <View style={styles.searchInsideView}>
                <TextInput
                    placeholder="Search for Your Friends"
                    value={username}
                    style={styles.searchInput}
                    onChangeText={(text) => handleChangeText(text)}
                />
            </View>
            <Pressable style={styles.searchButton}>
                
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        width: "100%",
        height: "60%",
        paddingTop: 10
    },
    searchInsideView: {
        width: "80%",
    },
    searchInput: {
        backgroundColor: "white",
        height: "80%",
        borderRadius: 3,
        paddingLeft: 10,
        fontSize: 17
    },
    searchButton: {
        width: "20%"
    }
})

export default Search;
