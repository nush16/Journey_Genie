import axios from 'axios'

// Configuration for API request
const api = {  
    params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    },
    headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_TRAVEL_API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

// Function to fetch places data from the API
export const getPlacesData = async () => {
    try {
        // Make an API request to get the list of restaurants within the specified boundary
        const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', api);
    // Return the fetched data
      return data;
    } catch (error) {
        console.error(error);
      }
  };
  