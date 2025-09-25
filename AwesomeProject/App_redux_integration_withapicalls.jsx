import { StatusBar, StyleSheet, useColorScheme, View, Text, FlatList, ActivityIndicator, Alert, TouchableHighlight } from 'react-native';
import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const initialState = {
    entities: [],
    loading: false,
}

const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
})
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.entities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }

})

const postReducer = postSlice.reducer

const appStore = configureStore({
    reducer: {
        posts: postReducer
    }
})

function Post() {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        //Todo: Remove settimeout after testing of loader
        dispatch(getPosts())
    }, [])

    const onSelectItem = (item) => {
        //show the item
        console.log(item)
        Alert.alert(item.title)
    }

    if (loading) return <ActivityIndicator size="large" color="#00ff00" />


    return <FlatList data={entities} keyExtractor={item => item.id} renderItem={(obj) => {
        return <Text style={styles.label} onPress={() => {
            onSelectItem(obj.item)
        }}>
            {obj.item.title}
        </Text>
    }} />

}
function App() {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        // Redux Provider must be top level
        <Provider store={appStore}>
            <SafeAreaProvider>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <AppContent isDarkMode={isDarkMode} />
            </SafeAreaProvider>
        </Provider>
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
            <Post />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
})

export default App;
