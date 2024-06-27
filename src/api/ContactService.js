import axios from "axios";
import { func } from "prop-types";

const API_URL = 'http://localhost:8080/contacts'

export async function logIn(email, password){
    const body={
        "email": email,
        "password": password
    };
    try{
    const response = await axios.post(`${API_URL}/authenticate`, body);
    //console.log(response.data);
    return response;
    } catch(error){
        console.error('Error:', error);
        //throw error;
    }
    
}

export async function updateAccount(newContact){
    axios.put(`${API_URL}/${newContact.id}`, newContact);
}

export async function register(newContact){
    try{
        console.log(newContact);
        const response = await axios.post(`${API_URL}/${newContact.email}`);
        console.log(response);
        if( response.status == 200) {
            // register
            console.log("register");
            const result = await axios.post(`${API_URL}`, newContact);
            console.log(result);
            return result;
        }
    } catch(error){
        console.log(error);
    }
}

export async function getUser(userId){
    try {
        const result = await axios.get(`${API_URL}/${userId}`)
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function updateContactPhotograph(formData) {
    return await axios.put(`${API_URL}/photo`, formData);
}