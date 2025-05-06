import axios from 'axios';

const EndPoint = "https://xcountries-backend.azurewebsites.net/all";

async function getAllCountries() {
  try {
    const response = await axios.get(EndPoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return [];
    
  }
}

export default getAllCountries;