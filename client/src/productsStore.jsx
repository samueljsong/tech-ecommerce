import airmax90blk from './assets/mens/airmax90-blck.webp'
import airmax90wt from './assets/mens/airmax90-white.webp'
import airmaxplusblk from './assets/mens/airmaxplus-blck.webp'
import airmaxpluswt from './assets/mens/airmaxplus-white.webp'
import courtvisionmidblk from './assets/mens/courtvisionmid-blck.webp'
import courtvisionmidwt from './assets/mens/courtvisionmid-white.webp'
import courtvisionmidgry from './assets/mens/courtvisionmid.webp'
import jordanpro from './assets/mens/jordanprostrong-blck.webp'
import jordanprowt from './assets/mens/jordanprostrong.webp'
import airforce1wt from './assets/mens/nikeairforce1-white.webp'
import airforce1blck from './assets/mens/nikeairforce1-black.webp'
import goflyeaseblck from './assets/mens/nikegoflyease-blck.webp'
import goflyeasewt from './assets/mens/nikegoflyease-white.webp'

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
        id: "2",
        name: "Air Max Plus",
        version: [
            {
                color: "black",
                image: airmaxplusblk
            },
            {
                color: "white",
                image: airmaxpluswt
            }
        ],
        price: 230.00,
        size: menSize,
    },
    {
        id: "3",
        name: "Court Vision",
        version: [
            {
                color: "black",
                image: courtvisionmidblk
            },
            {
                color: "white",
                image: courtvisionmidwt
            },
            {
                color: "grey",
                image: courtvisionmidgry
            }
        ],
        price: 120.00,
        size: menSize,
    },
    {
        id: "4",
        name: "Jordan Pro",
        version: [
            {
                color: "black",
                image: jordanpro
            },
            {
                color: "white",
                image: jordanprowt
            }
        ],
        price: 185.00,
        size: menSize,
    },
    {
        id: "5",
        name: "Nike Airforce 1",
        version: [
            {
                color: "white",
                image: airforce1wt
            },
            {
                color: "black",
                image: airforce1blck
            }
        ],
        price: 110.00,
        size: menSize,
    },
    {
        id: "6",
        name: "Go Fly Ease",
        version: [
            {
                color: "black",
                image: goflyeaseblck
            },
            {
                color: "white",
                image: goflyeasewt
            }
        ],
        price: 165.00,
        size: menSize,
    },
    
    
]

function getProductData(id) {
    return productArray.find(product => product.id === id)
}

export { productArray, getProductData }