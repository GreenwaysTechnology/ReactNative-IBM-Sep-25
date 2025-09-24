import { produce } from 'immer'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

function ProductList() {
    const [products, setProducts] = useState({ products: [], isLoading: false, error: null })
    async function fetchProducts() {
        try {
            const url = `https://api.escuelajs.co/api/v1/products`
            const response = await fetch(url)
            const tmpProducts = await response.json()
            setProducts(produce(products, (draft) => {
                draft.products = tmpProducts
                draft.isLoading = true
            }))
        }
        catch (err) {
            setProducts(produce(products, (draft) => {
                draft.err = err
                draft.isLoading = true
            }))
        }
    }
    //componentDidMount
    useEffect(() => {
        //any async task
        fetchProducts()
    }, [])
    //conditional rendering: how to use if...else..elseif
    if (products.error) {
        return <View>
            <Text style={styles.label}>Error : {error.message}</Text>
        </View>
    } else if (!products.isLoading) {
        return <Text style={styles.label}>Loading...</Text>
    } else {
        return   <ScrollView>
            {
                products.products.map(product => {
                    return <Text key={product.id} style={[styles.label]}>{product.title} </Text>
                })
            }
        </ScrollView>
    }
}
export { ProductList }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        alignItems:'center',
        justifyContent:'center'
    }
})