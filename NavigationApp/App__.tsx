import { StatusBar, StyleSheet, useColorScheme, View, Text,Button } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens 
const HomeScreen = (props) => <View style={styles.container}>
    <Text style={{
        fontSize: 40,
    }}>Home Screen</Text>
    <Button title="Profile" onPress={() => {
        props.navigation.navigate('Profile')
    }} />
</View>

const ProfileScreen = () => <View style={styles.container}>
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
    backgroundColor: 'lightblue',
 
  },
});

export default App;
