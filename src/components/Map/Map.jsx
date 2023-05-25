import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './MapStyles.js';

const Map = () => {
    //Check screen size
    const isMobile = useMediaQuery('(min-width:600px)');

    const classes = useStyles();

      // Set initial coordinates for the map
    const coordinates = {lat: 0, lng: 0};

  return (
    <div className={classes.mapContainer}>
      {/* Render the GoogleMapReact component */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates} // Set the default center of the map
        center={coordinates} // Set the current center of the map
        defaultZoom={14} // Set the default zoom level of the map
        margin={[50, 50, 50, 50]} // Set margins for the map container
        options={''} // Customize map options
        onChange={''} // Handle map changes
        onChildClick={''} // To handle clicks on child elements of the map
      > 
      </GoogleMapReact>
    </div>
  );
};

export default Map;