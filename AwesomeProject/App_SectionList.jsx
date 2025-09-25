import React from 'react';
import { StatusBar, StyleSheet, SectionList, useColorScheme, View, Text } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const DATA = [
    {
        title: "A",
        data: ["Apple", "Avocado"]
    },
    {
        title: "B",
        data: ["Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry", "Banana", "Blueberry", "Blackberry"]
    },
    {
        title: "C",
        data: ["Cherry", "Coconut"]
    }
];

function MySectionList() {

    return <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true}  
        renderItem={({ item }) => (
            <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
        )}

        ItemSeparatorComponent={() => <View style={styles.separator} />}
        SectionSeparatorComponent={() => <View style={styles.sectionSeparator} />}
        ListHeaderComponent={() => <Text style={styles.listHeader}>Fruits List</Text>}
        ListFooterComponent={() => <Text style={styles.listFooter}>End of List</Text>}
    />
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
        <MySectionList/>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#f0f0f0',
        padding: 5,
    },
    item: {
        fontSize: 18,
        padding: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginLeft: 10,
    },
    sectionSeparator: {
        height: 5,
        backgroundColor: '#ccc',
    },
    listHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    listFooter: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        color: 'gray',
    },
});
