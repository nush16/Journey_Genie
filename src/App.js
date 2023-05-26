import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api/ApiCall";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  const [places, setPlaces] = useState([]); // State for the Places
  const [coordinates, setCoordinates] = useState({}); // State for the Coordinates
  const [bounds, setBounds] = useState({}); // State for the Bounds
  const [childClicked, setChildClicked] = useState(null); // State for the Clicked
  const [loading, setLoading] = useState(false); // State for the Loading
  const [type, setType] = useState("restaurants"); // State for the selected type
  const [rating, setRating] = useState(""); // State for the selected rating
  const [filteredPlaces, setFilteredPlaces] = useState([]); // State for the filter

  //Get current location
  useEffect(() => {
    // Use the navigator.geolocation API to get the current position of the device
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        //extract the latitude and longitude values
        //store values in the state using setCoordinates
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //Filter Ratings
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating); // Filters the 'places' array based on the condition: place.rating > rating.
    setFilteredPlaces(filtered); // Updates the 'filteredPlaces' state with the filtered array.
  }, [rating]);

  // Get location data from API
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);
      // Fetch data using the getPlacesData function
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        // Update the state with the fetched data
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0)); // Filters the 'data' array to set the 'places' state with places that have a name and more than 0 reviews.
        setLoading(false);
        setFilteredPlaces([]);
      });
    }
  }, [type, bounds]);

  return (
    <>
      {/* Applies a baseline CSS reset to the component */}
      <CssBaseline />
      {/* Renders the Header component with the 'setCoordinates' prop */}
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={1} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places} // Passes the filtered places array if it exists, otherwise passes the original places array.
            childClicked={childClicked} // Passes the 'childClicked' state as a prop.
            loading={loading} // Passes the 'loading' state as a prop.
            type={type} // Passes the 'type' state as a prop.
            setType={setType} // Passes the 'setType' function as a prop.
            rating={rating} // Passes the 'rating' state as a prop.
            setRating={setRating} // Passes the 'setRating' function as a prop.
          />
        </Grid>

        <Grid item xs={12} md={8}>
          {/* Props to be passed to the Map component */}
          <Map
            setCoordinates={setCoordinates} // Passes the 'setCoordinates' function as a prop.
            setBounds={setBounds} // Passes the 'setBounds' function as a prop.
            coordinates={coordinates} // Passes the 'coordinates' state as a prop.
            places={filteredPlaces.length ? filteredPlaces : places} // Passes the filtered places array if it exists, otherwise passes the original places array.
            setChildClicked={setChildClicked} // Passes the 'setChildClicked' function as a prop.
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
