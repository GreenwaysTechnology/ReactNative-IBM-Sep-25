import { produce } from 'immer'
import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

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
            <Text>Error : {error.message}</Text>
        </View>
    } else if (!products.isLoading) {
        return <Text>Loading...</Text>
    } else {
        return <View>
            <View>
                {
                    products.products.map(product => {
                        return <View  key={product.id}>
                            <Text>{product.title} </Text>
                        </View>
                    })
                }
            </View>
        </View>
    }
}
export { ProductList }