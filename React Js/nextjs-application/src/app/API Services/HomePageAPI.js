import axios from "axios"


const electronicProducts = () => {
    return axios.get('https://wscubetech.co/ecommerce-api/products.php', {
        params: {
            limit: 8
        }
    })
    .then((result) => {
        return result.data.data
    })
    .catch(() => {

    })
}

const ecommerceProducts = () => {
    // return axios.get('https://wscubetech.co/ecommerce-api/products.php', {
    //     params: {
    //         limit: 8
    //     }
    // })
    // .then((result) => {
    //     return result.data.data
    // })
    // .catch(() => {

    // })
}

export { electronicProducts, ecommerceProducts }

// export default electronicProducts