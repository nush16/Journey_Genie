import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
// import Design from './mapDesign.js';
import useStyles from './MapStyles.js';


const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    //Check screen size
    const isDesktop = useMediaQuery('(min-width:600px)');

    const classes = useStyles();

    // Set initial coordinates for the map
    // const coordinates = {lat: 0, lng: 0};

  return (
    <div className={classes.mapContainer}>
      {/* Render the GoogleMapReact component */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates} // Set the default center of the map
        center={coordinates} // Set the current center of the map
        defaultZoom={14} // Set the default zoom level of the map
        margin={[50, 50, 50, 50]} // Set margins for the map container
        options={{disableDefaultUI: true, zoomControl: true}} // Customize map options
        // Handle map changes
        onChange={(e) => {
          // Update the coordinates state with the center latitude and longitude from the event
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          // Update the bounds state with the northeast and southwest boundaries from the event
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
        onChildClick={(child) => setChildClicked(child)} // To handle clicks on child elements of the map
        > 
        {places?.map((place, i) => ( // Maps through the 'places' array to render markers for each place.
  <div
    className={classes.markerContainer} // Applies the 'markerContainer' class to the div element.
    lat={Number(place.latitude)} // Sets the latitude as a prop on the div element.
    lng={Number(place.longitude)} // Sets the longitude as a prop on the div element.
    key={i} // Sets a unique key for the marker div.
  >
    {
      !isDesktop ? ( // Checks if the current device is not a desktop
        <LocationOnOutlinedIcon color="primary" fontSize="large" /> // Renders a location icon for non-desktop devices
      ) : (
        <Paper elevation={3} className={classes.paper}> 
        {/* Displays the name of the place  */}
          <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography> 
          <img
            className={classes.pointer} // Applies the 'pointer' class to the image
            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} // Sets the image source with a fallback URL.
            alt={place.name} // Adds the name of the place as the alt text for the image
          />
          {/* Displays a read-only rating component for the place */}
          <Rating name="read-only" size="small" value={Number(place.rating)} readOnly /> 
        </Paper>
      )
    }
  </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;