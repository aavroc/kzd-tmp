import React, {useState, useCallback} from 'react';
import {FlatList, StyleSheet, Text, Button, View, TextInput, Image} from 'react-native';
//import {Camera, useCameraDevices} from 'react-native-vision-camera'
import {launchCamera, launchImageLibrary, ImagePicker} from 'react-native-image-picker'

const App = () => {
//    const newCameraPermission = async() => {
//        const permission = await Camera.requestCameraPermission()
//        console.log("test2")
//
//    };
//    newCameraPermission()

//    const result = launchCamera()
//    console.log(result)

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
                return
            }
        )
    }
    camlaunch();


    return(
        <View>
            {foto && (
            <Image
                source={{uri: foto.assets[0].uri}}
                style={{width: 300, height: 300}}
            ></Image>

            )}
        </View>
    )



//    const devices = useCameraDevices('telephoto-camera')
//    const device = devices.back
//    console.log(device.devices)

//    if (device == null) return <Text style={styles.tekst}>Camera not working</Text>
//    return (
//        <Camera
//            style="StyleSheet.absoluteFill"
//            device={device}
//            isActive={true}
//        />
//    )

//    return(
//        <View>
//            <Image
//                source={uri:result.uri}
//                style={{widht: 300, height: 300}}
//        </View>
//
//    )

//    return(
//        <View>
//            <Text style={styles.tekst}>Test</Text>
//        </View>
//    )

}

const styles = StyleSheet.create({
    tekst: {
        fontSize: 20,
        color: '#000',
    }

});



export default App;