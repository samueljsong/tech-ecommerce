import airmax90blk from './assets/mens/airmax90-blck.webp'
import airmax90wt from './assets/mens/airmax90-white.webp'

const menSize = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
const womenSize = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]

const productArray = [
    {
        id: "1",
        name: "Air Max 90",
        version: [
            {
                color: "black",
                image: airmax90blk
            },
            {
                color: "white",
                image: airmax90wt
            }
        ],
        price: 170.00,
        size: menSize,
    },
    {
        id: "1",
        name: "Air Max 90",
        version: [
            {
                color: "black",
                image: airmax90blk
            },
            {
                color: "white",
                image: airmax90wt
            }
        ],
        price: 170.00,
        size: menSize,
    },
    {
        id: "1",
        name: "Air Max 90",
        version: [
            {
                color: "black",
                image: airmax90blk
            },
            {
                color: "white",
                image: airmax90wt
            }
        ],
        price: 170.00,
        size: menSize,
    }
]

function getProductData(id) {
    return productArray.find(product => product.id === id)
}

export { productArray, getProductData }