import './Store.css'
import { productArray } from '../productsStore'
import { ProductCard } from '../components/ProductCard'

export function Store() {

    return (
        <div className="store-container">
            {productArray.map(product => {
                return <ProductCard product={product}/>
            })}
        </div>
    )
}