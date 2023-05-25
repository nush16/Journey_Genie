import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: ne.lat,
        tr_longitude: sw.lng,
        tr_latitude: ne.lng,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
