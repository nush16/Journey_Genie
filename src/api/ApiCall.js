import axios from "axios";

// Function to fetch places data from the Travel Advisor API
export const getPlacesData = async (type, sw, ne) => {
  try {
    // Make an HTTP GET request to the API endpoint
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        // Set the parameters for the boundary coordinates
        params: {
          bl_latitude: sw.lat, // Southwest latitude
          bl_longitude: sw.lng, // Southwest longitude
          tr_longitude: ne.lng, // Northeast longitude
          tr_latitude: ne.lat, // Northeast latitude
        },
        // Set the headers for authentication and authorization
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_TRAVEL_API_KEY, // RapidAPI key
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com", // RapidAPI host
        },
      }
    );

    // Return the retrieved data
    return data;
  } catch (error) {
    // Log any errors to the console
    console.log(error);
  }
};
