import { StatusBar, StyleSheet, useColorScheme, View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
// import { ProductList } from './components/Products';
import TODOS from './mock-data/todos';
import { produce } from 'immer'

function List(props) {
    const [todos, setTodos] = useState({ items: [], isLoading: false, error: null })


    const onItemSelect = item=>{
        // Alert
        Alert.alert(JSON.stringify(item))
    }
    async function fetchTodos() {
        try {
            const url = `https://jsonplaceholder.typicode.com/todos`
            const response = await fetch(url)
            const tmpTodos = await response.json()
            setTodos(produce(todos, (draft) => {
                draft.items = tmpTodos
                draft.isLoading = true
            }))
        }
        catch (err) {
            setTodos(produce(todos, (draft) => {
                draft.err = err
                draft.isLoading = true
            }))
        }
    }
    //componentDidMount
    useEffect(() => {
        //any async task
        fetchTodos()
    }, [])

    if (todos.error) {
        return <View>
            <Text>{todos.error.message}</Text>
        </View>
    } else if (!todos.isLoading) {
        return <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    } else {
        return <FlatList data={props.todos} keyExtractor={item => item.id} renderItem={(obj) => {
            return <Text style={styles.title} onPress={()=>{
                onItemSelect(obj.item)
            }}>
                {obj.item.title}
            </Text>
        }
        } />
    }
}

function App() {
    const isDarkMode = useColorScheme() === 'dark';
    console.log('mode', isDarkMode)
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
            <List todos={TODOS} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: 'blue',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },
    code: {
        fontWeight: 'bold',
        color: '#61dafb',
    },
});

export default App;

