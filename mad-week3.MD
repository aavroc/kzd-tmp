# Week 3: Image, ScrollView, ListView en Text input

Vorige week hebben we gezien hoe we verschillende components toevoegen aan een react-native app (View, Text, Button). Deze week gaan we kijken hoe we deze componenten ..


## Image

```javascript
// Manier 1
<Image source={require('./image.png')} />

// Manier 2
const plaatje = {
    uri: 'https://reactnative.dev/docs/images',
    width: 64,
    height: 64
};

<Image source={plaatje} />
```
> * https://reactnative.dev/docs/images



## ScrollView

```javascript
<ScrollView>
    <Text>Scrollende tekst</Text>
    <Image source={require('./image.png')} /> 
</ScrollView>
```

## ListView

Gebruik makend van Flatlist of SectionList. 


### Flatlist
```javascript
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

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
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;
```

### SectionList

```javascript
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
      </View>
    );
}

export default SectionListBasics;

```



https://snack.expo.dev/
