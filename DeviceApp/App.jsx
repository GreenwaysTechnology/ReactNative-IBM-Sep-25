import React, { useEffect, useState } from 'react';
import { Button,StatusBar, PermissionsAndroid, Platform } from 'react-native';
import { Alert, StyleSheet, useColorScheme, View } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

function MyCamera() {
    const device = useCameraDevice('back')

    useEffect(() => {
        console.log('Available devices:', device);
    }, [device]);

    useEffect(() => {
        const requestPermission = async () => {
            const cameraPermission = await Camera.requestCameraPermission();
            const microphonePermission = await Camera.requestMicrophonePermission();

            if (cameraPermission !== 'authorized' || microphonePermission !== 'authorized') {
                Alert.alert('Permission denied', 'Camera or Microphone permission is required.');
            }
        };
        requestPermission();
    }, []);


    if (device == null) {
        return <Text>Loading camera...</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
            />
            <View style={styles.buttonContainer}>
                <Button title="Capture" onPress={() => Alert.alert('Feature not implemented')} />
            </View>
        </View>
    );
}

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppContent isDarkMode={isDarkMode} />
        </SafeAreaProvider>
    );
}

function AppContent({ isDarkMode }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={[
            styles.container,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
                backgroundColor: isDarkMode ? '#121212' : '#fff',
            },
        ]}
        >
            <MyCamera />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
