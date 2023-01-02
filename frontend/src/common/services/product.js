import axios from "axios"

async function getProducts(product_id) {
    const response = await axios.get("/api/product/sub_category/")
    return response.data
}

export default 
{
    getProducts: getProducts
}