import axios from "axios";

const API_URL = "http://localhost:8080/api/sentiment";

export async function analyzeSentiment(text) {    
    try {
        return await axios.post(`${API_URL}/analyze`, text);
    } catch (error) {
        console.count(error)
    }
}