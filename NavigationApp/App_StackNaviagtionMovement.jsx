import { StatusBar, StyleSheet, useColorScheme, View, Text, Button, TouchableHighlight, Alert } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens 
const HomeScreen = (props) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <TouchableHighlight onPress={() => {
        props.navigation.navigate("Profile")
    }} activeOpacity={0.4} underlayColor={'lightgreen'}>
        <Text style={{
            fontSize: 40,
        }}>View Profile</Text>
    </TouchableHighlight>



</View>
const ProfileScreen = (props) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{
        fontSize: 40,
    }}>Profile Screen</Text>
</View>

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <AppContent />
        </SafeAreaProvider>
    );
}

function AppContent() {
    const insets = useSafeAreaInsets();
    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                },
            ]}
        >
            <NavigationContainer>
                <Stack.Navigator>
                    {/* Screens */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});

export default App;
