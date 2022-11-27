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