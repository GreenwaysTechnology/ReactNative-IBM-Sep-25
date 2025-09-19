//list and listener: select item 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import PRODUCTS from './mock-data/products'

class Products extends React.Component {
    state = {
        products: PRODUCTS,
        selectedProduct: null
    }

    //method to get product data which is not listner
    onProductSelected = (product) => {
        // this.setState((prevState) => {
        //     return {
        //         ...prevState, selectedProduct: product
        //     }
        // })
        this.setState(({ ...this.state, selectedProduct: product }))
    }
    render() {
        return <div>
            {
                this.state.products.map(product => {
                    return <section key={product.id}>
                        <p style={{ cursor: 'pointer' }} onClick={() => {
                            this.onProductSelected(product)
                        }}>{product.title}</p>
                    </section>
                })
            }
            {this.state.selectedProduct ? <div>
                <h1>Id : {this.state.selectedProduct.id}</h1>
                <h2>Price :{this.state.selectedProduct.price}</h2>
                <img src={this.state.selectedProduct.image} height={100} width={100} />
            </div> : <h1>No Product Selected</h1>}

        </div>
    }
}


const App = () => {
    return <>
        <Products />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
