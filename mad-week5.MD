# Camera

# Rekenmachine

```javascript
import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Text, Button, View, TextInput, Image, Alert, TouchableOpacity} from 'react-native';

const App = () => {
    const [input, updateInput] = useState(0);
    const [result, updateResult] = useState("");

    const addAction = (action) => {
        let newString = input + action;
        // console.log(newString);
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
            <View style={styles.buttonsview}>
                <TouchableOpacity onPress={() => addAction("+")} style={styles.button}>
                    <Text style={styles.tekst}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => addAction("-")} style={styles.button}>
                    <Text style={styles.tekst}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => addAction("*")} style={styles.button}>
                    <Text style={styles.tekst}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => addAction("/")} style={styles.button}>
                    <Text style={styles.tekst}>/</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => evaluate()} style={styles.button}>
                    <Text style={styles.tekst}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '50%',
    },
    buttonsview:{
        flex: 1,
        flexDirection: "row",
    },
    input:{
        fontSize: 22,
        color: "#000"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#dddd",
        padding: 10,
        margin: 5,
        width: 50,
        height: 50,
        color: "#000",
        elevation: 2,
    },
    tekst: {
        fontSize: 20,
        color: '#000',
    }

});

export default App;
```



```cli
npm install react-native-image-picker
```

```javascript
import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Text, Button, View, TextInput, Image, Alert} from 'react-native';

import {launchCamera} from 'react-native-image-picker'

const App = () => {

    const [foto, setFoto] = useState(null)

    camlaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (res) =>
            {
                console.log('response = ', res.assets[0].uri);
                setFoto(res);
            }
        )
    }

    return(
        <View>
            {foto && (
            <Image
                source={{uri: foto.assets[0].uri}}
                style={{width: 300, height: 300}}
            />
            )}
            <Button title='take picture' onPress={camlaunch} />
        </View>
    )
}

const styles = StyleSheet.create({
    tekst: {
        fontSize: 20,
        color: '#000',
    }

});



export default App;

```
