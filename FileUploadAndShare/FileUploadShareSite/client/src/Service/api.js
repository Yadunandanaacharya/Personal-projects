import axios from 'axios';

//giving back end url to front end he told
const API_URL = 'http://localhost:8000';

export const uploadFile = async(data) => {
    try{
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    }
    catch(error){
        console.log("Error while caling API");
    }
}
 