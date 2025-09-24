import { useState } from "react";
import { View, Text, Button } from "react-native";

export function Counter() {
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        setCounter(counter + 1)
    }
    return <View>
        <Text>Counter : {counter}</Text>
        <Button title="Increment" onPress={onIncrement} />
    </View>
}