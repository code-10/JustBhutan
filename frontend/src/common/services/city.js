import axios from "axios"

async function getCity() {
    const response = await axios.get("/api/city/")
    return response.data
}

export default 
{
    getCity: getCity
}