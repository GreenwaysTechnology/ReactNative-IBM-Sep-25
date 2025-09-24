import { View, Text, StyleSheet } from "react-native"
import { styles } from "../styles"

export default function User(props) {
    const { id, name } = props
    return <View>
        <Text style={[styles.title]}>Id : {id}</Text>
        <Text>Name : {name}</Text>
    </View>
}

// const styles = StyleSheet.create({
//     title: {
//         color: 'blue'
//     }
// })