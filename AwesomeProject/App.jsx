import { StatusBar, StyleSheet, useColorScheme, View, Text, FlatList, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react'

function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function init() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) throw new Error("Network response was not ok");
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        }
        init()
    }, [])

    return <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
            return <View>
                <Image style={{borderRadius:8}} source={{ uri: item.image }} alt={item.title} resizeMode="contain" height={240}
                    width={250}
                />
            </View>
        }}
    />


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
        <View
            style={[
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
            <ProductList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        borderRadius:8,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});

export default App;
