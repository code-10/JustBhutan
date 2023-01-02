import axios from "axios"

async function postSurvey(name, email, phone, city, product_pref) {
    
    const csv_product_pref = product_pref.join(",")
    const data = {
        name: name,
        email_id: email,
        phone_number: phone,
        city: city,
        product_ids: csv_product_pref
    }
    console.log("Sending : ", data)

    const response = await axios.post("/api/survey/", data)

    return response.data
}

export default 
{
    postSurvey: postSurvey
}