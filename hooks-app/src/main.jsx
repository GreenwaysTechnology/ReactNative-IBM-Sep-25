import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { produce } from 'immer'

const Products = () => {
    //state for holding data,error,isLoading
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
        return <div>
            <h1>Error : {error.message}</h1>
        </div>
    } else if (!products.isLoading) {
        return <h2>Loading...</h2>
    } else {
        return <div>
            <h1>Products</h1>
            <hr />
            <div>
                {
                    products.products.map(product => {
                        return <section>
                            <img src={product.category.image} height={200} width={200} />
                            <h1>{product.title} </h1>
                            <p>{product.description}</p>
                            <h5>{product.price}</h5>
                        </section>
                    })
                }
            </div>
        </div>
    }
}

const App = () => {
    return <Products />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
