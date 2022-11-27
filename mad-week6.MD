# Week 6

Voor deze les gaan we gebruik maken van weer een library: `react-native-paper`.

Dit is een zgn Material Design Library, dwz het volgt de standaarden die Google heeft neergezet. Je kunt het zien als een manier om ervoor te zorgen dat je snel en gemakkelijk een mooie interface kan creeeren, een beetje zoals Bootstrap dat doet voor CSS. 

Om de library te installeren gebruiken we weer NPM:

```commandline
npm install react-native-paper
```

Voor icons gebruikt de `react-native-paper` library weer een andere library: `react-native-vector-icons`. Installeer deze ook met NPM:

```commandline
nmp install react-native-vector-icons
```

Een standaard button:

```javascript
import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Image, Alert} from 'react-native';
import {Button, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const App = () => {

    const theme ={
        ...DefaultTheme,
        roundness: 2,
        colors: {
            ...DefaultTheme.colors,
            primary: '#3498db',
            accent: '#f1c40f',
        }
    }
    return(
        <PaperProvider theme={theme} >
            <Button icon="camera" onPress={() => console.log('button press')}>Press me</Button>
        </PaperProvider>
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

Bovenstaande code toont een simpele button met een icon. Let hierbij op de volgende dingen:
1. Je returned in je component als omsluitend component de `<PaperProvider>`. De overige components moeten daar allemaal inzitten.
2. Je zorgt ervoor dat je de benodigde components bovenaan in je code importeert uit `react-native-paper` ipv uit `react-native`. 

# OPDRACHT:

Je vindt docs voor Paper hier: https://callstack.github.io/react-native-paper/index.html  

1. Implementeer de opdracht van week 4 (de rekenmachine) door gebruik te maken van Paper.

# INLEVEREN BIJ DEZE OPDRACHT:

1. Een screenshot van een mooi gestijlde rekenmachine + jouw app.js bestand.