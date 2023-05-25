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

   // Get location data from API 
    useEffect(() => {
        // Fetch data using the getPlacesData function
        getPlacesData()
            .then((data) => {
                // Update the state with the fetched data
                setPlaces(data);
            })
      }, []);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>

                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        
        </>
    );
}

export default App;