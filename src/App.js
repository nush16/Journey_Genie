import React, {useState,useEffect} from "react";
import { CssBaseline, Grid} from '@material-ui/core';
import { getPlacesData} from './api/ApiCall'; 
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]); // State for the Places
    const [coordinates, setCoordinates] = useState({}); // State for the Coordinates
    const [bounds, setBounds] = useState({}); // State for the Bounds

    //Get current location
    useEffect(() => {
         // Use the navigator.geolocation API to get the current position of the device
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => { //extract the latitude and longitude values
            //store values in the state using setCoordinates
            setCoordinates({lat: latitude, lng: longitude});
        });
      }, []); 


   // Get location data from API 
    useEffect(() => {
        // Fetch data using the getPlacesData function
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                // Update the state with the fetched data
                setPlaces(data);
            })
      }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List places ={places}
                    />
                </Grid>

                <Grid item xs={12} md={8}>
                    {/* Props to be passed to the Map component */}
                    <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates = {coordinates}
                    places ={places}
                    />
                </Grid>
            </Grid>
        
        </>
    );
}

export default App;