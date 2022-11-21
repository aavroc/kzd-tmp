import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Text, Button, View, TextInput, Image, Alert} from 'react-native';
//import {Camera, useCameraDevices} from 'react-native-vision-camera'
import {launchCamera} from 'react-native-image-picker'

const App = () => {
    const [input, updateInput] = useState(0);
    const [operation, updateOperation] = useState("");
    const [result, updateResult] = useState("");

    const addAction = (action) => {
//        updateInput(input += action)
//        this.setState({input: +  " " + action})

        console.log(action);
        let newString = input + action;
        console.log(newString);
        updateInput(newString);
    }

    const evaluate = () => {
        console.log(input);
        console.log(eval(input))
        updateResult(eval(input))
    }

    return(
        <View>
            <Text>{result}</Text>
            <TextInput
                style={styles.input}
                onChangeText={updateInput}
                keyboardType = "numeric"
                value={input}
            />
            <View>
                <Button onPress={() => addAction("-")} title="-" />
                <Button onPress={() => addAction("+")} title="+" />
                <Button onPress={() => addAction("*")} title="*" />
                <Button onPress={() => addAction("/")} title="/" />
                <Button onPress={() => evaluate()} title="=" />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
    },
    buttonsview:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    input:{
        fontSize: 22,
        color: "#000"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#dddd",
        padding: 10
    },
    tekst: {
        fontSize: 20,
        color: '#000',
    }

});



export default App;