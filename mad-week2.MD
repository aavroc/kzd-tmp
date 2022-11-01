---
theme : "solarized"
transition: "none"
highlightTheme : "Monokai"
---

# React-native overview

1. Gebaseerd op React, een Javascript Library bedoeld voor het maken van user interfaces.
2. Jij ontwerpt een _view_ voor elke _state_ van je applicatie en react zorgt ervoor dat de juiste gegevens worden weergegeven.
3. Component-Based. Een component is een op zichzelf staand stuk code die zijn eigen _state_ bijhoudt. Jij kan deze components dan samenstellen tot een complexe user interface.
4. React-native werkt hetzelfde als react, dwz met components. Tijdens de compilatie stap worden deze vertaald naar _native_ componenten (voor Android of iOS)

---

## Hoe beschrijf je een component?

React-native (en react) gebruiken daarvoor een afgeleide van XML genaamd JSX. 
* XML = Extentable Markup Language
* JSX = JavaScript XML

---

## Van HTML naar XML naar JSX
#### HTML
```html
<div>
    <p>Hier staat wat tekst</p>
</div>
```
#### XML
```xml
<zelfbedachtElement>
    <specifiek>
        <etc>value1</etc>
    </specifiek>
    <specifiek>
        <etc>value2</etc>
    </specifiek>
</zelfbedachtElement>
```

#### JSX
```jsx
<view>
    <text>Hello World!</text>
</view>
```

---

## Een component genaamd `HelloWorldApp`
```jsx
import React from 'react';          
import { Text, View } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;
```
> * justify-content --> justifyContent align-item --> alignItems

---

## JS Arrow functions
#### Voorbeeld 1
```js
function hello(){
    return "Hello World";
}

hello(); //Hello World;
```
#### Voorbeeld 2
```js
hello = function(){
    return "Hello World";
}

hello(); //Hello World;
```
#### Voorbeeld 3
```js
hello = () => {
    return "Hello World";
}
hello(); //Hello World;
```

#### Voorbeeld 4
```js
hello = () => "Hello World";
hello(); //Hello World;
```

---


## Parameters meegeven in een arrow function
```js
hello = (value) => "Parameter is: " + value;
hello(); //Hello World;
```
```js
hello = value => "Parameter is: " + value;
hello(); //Hello World;
```

---

## Props (of properties)

```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;
```
---

## State

```jsx

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Click me!"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
```

# Opdracht:

1. Maak een app met twee knoppen en een tekstveld dat een getal laat zien. Het getal is in eerste instantie 0. Een knop telt 1 op bij het getal. De tweede knop trekt 1 af van het getal. 
2. **Inleveren**: maak een screenshot van Android Studio waarbij je je code ziet en je app ziet draaien in de simulator.