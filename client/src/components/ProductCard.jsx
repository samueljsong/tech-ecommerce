import './ProductCard.css'
import { formatMoney } from '../utilities/formatMoney'

export function ProductCard(props) {

    return (

        <div className='pc-container'>

            <img className='pc-image' src={props.product.version[0].image} alt="shoe" />
            <div className='pc-info'>
                {props.product.name}
                <div className='pc-cost'>
                    {formatMoney(props.product.price)}
                </div>
            </div>
        </div>
    )
}