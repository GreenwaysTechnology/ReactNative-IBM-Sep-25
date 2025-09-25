import { StatusBar, StyleSheet, useColorScheme, View, Text,Button } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

const initialState = {
    like: 0,
}
export const ReviewSlice = createSlice({
    initialState,
    name: 'review',
    reducers: {
        increment(state, action) {
            state.like++
        }
    }
})

//extract reducer from the slice
const ReviewReducer = ReviewSlice.reducer
//extract actions from the slice
const { increment } = ReviewSlice.actions

const appStore = configureStore({
    reducer: {
        reviewReducer: ReviewReducer
    }
})
const Review = () => {
    const review = useSelector(appState => {
        return appState.reviewReducer
    })
    const dispatch = useDispatch()

    const onLike = () => {
        dispatch(increment())
    }

    return <>
        <Text style={styles.label}>Like {review.like}</Text>
        <Button title="Like" onPress={onLike} />
    </>
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
            <Review />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
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
