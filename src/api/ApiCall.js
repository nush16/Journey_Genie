import axios from 'axios'

// Function to fetch places data from the API
export const getPlacesData = async (sw,ne) => {
    try {
        // Make an API request to get the list of restaurants within the specified boundary
        const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
            params: {
                bl_latitude: 'sw.lat',
                tr_latitude: 'ne.lat',
                bl_longitude: 'sw.lng',
                tr_longitude: 'ne.lng',
                },
                headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }

        });

    // Return the fetched data
      return data;
    } catch (error) {
        console.error(error);
      }
  };
  