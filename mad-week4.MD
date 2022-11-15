# Keuzedeel - Mobile Application Development (K0497)
# Week 4

## Items toevoegen aan FlatList vanuit text input

```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';

const FlatListBasics = () => {
    
    var testArray = ["persoonA", "persoonB"]
    
    const [data, updateData] = React.useState(testArray)

    const addStringToArray = () => {
        data.push(text);
        console.log(data);
    }

    const [text, updateText] = React.useState("initial tekst");

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
      <TextInput
        style={styles.input}
        onChangeText={item => updateText(item)}
        value={text}
        placeholder= "Voeg een naam toe"
       />
       <Button
        onPress={addStringToArray}
        title={"Add item to FlatList"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default FlatListBasics;
```

### Opdracht: 
Maak een rekenmachine met vier buttons (+,-, *, /), een text input en een text out element / component.