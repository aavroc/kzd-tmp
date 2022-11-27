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
    const [output, updateOutput] = React.useState(1);

  return (
    <View style={styles.container}>
      <Text
        style = {styles.titleText}
        > {output}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={item => updateText(item)}
//        value={text}
        placeholder= "Voeg een naam toe"
        keyboardType = "numeric"
       />
       <Button
        onPress={() => updateOutput(text)}
        title={"Add item to FlatList"} />
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
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
  },
   titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
});

export default FlatListBasics;