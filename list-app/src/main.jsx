import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PRODUCTS from './mock-data/products'

const ProductList = ({ products }) => {

    return <div>
        {
            products.map(product => {
                return <section key={product.id}>
                    <h1>{product.title}</h1>
                    <img src={product.image} height={100} width={100} alt='Product Image' />
                    <p>{product.description}</p>
                    <h4>${product.price}</h4>
                    <h4>{product.rating.rate} {product.rating.count}</h4>
                </section>
            })
        }
    </div>

}

const App = () => {
    return <>
        <ProductList products={PRODUCTS} />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
