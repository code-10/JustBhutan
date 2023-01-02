import axios from "axios"

async function postSurvey(name, email, phone, city, product_pref) {
    const data = {
        name: name,
        email: email,
        phone: phone,
        city: city,
        product_pref: product_pref
    }
    const response = await axios.post("/api/product/sub_category/", data)
    return response.data
}

export default 
{
    postSurvey: postSurvey
}