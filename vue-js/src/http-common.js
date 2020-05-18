import axios from "axios"

//initializing axios with HTTP base url and headers
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type":"application/json"
    }
})