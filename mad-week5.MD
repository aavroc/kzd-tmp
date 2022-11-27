# Aanspreken van de camera

Voor het aanspreken van de camera gebruiken we een library: react-native-image-picker.

Installeer react-native-image-picker door onderstaande command uit te voeren in een terminal. Letop dat je in de root map van je project staat als je dit doet.

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

# OPDRACHT:

1. Zorg dat je de bovenstaande code werkend hebt. 

# INLEVEREN BIJ DEZE OPDRACHT:

1. Een screenshot van de app werkend in de android simulator op het moment dat je een foto hebt genomen en deze getoond wordt.
