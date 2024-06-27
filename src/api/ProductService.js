import axios from "axios";

const API_URL = "http://localhost:8080/products"

export async function getAllProducts(category, productFilterRequest) {
    try {
        const response = await axios.post(`${API_URL}/category/${category}`, productFilterRequest);        
        console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response;
    } catch (error) {
        console.error('Error fetching product by id:', error);
        throw error;
    }
}

export async function getProductsByOwnerId(onwerId, pageRequest) {
    try {
        const response = await axios.post(`${API_URL}/account/${onwerId}`, pageRequest);
        return response;
    } catch (error) {
        console.count(error)
    }
}

export async function updateProductPhotograph(formData) {
    return await axios.put(`${API_URL}/photo`, formData);
}

export async function createProduct(product) {
    return await axios.post(`${API_URL}`, product)
}

export async function updateDescription(id, description) {
    return await axios.patch(`${API_URL}/${id}/description`, description);
}