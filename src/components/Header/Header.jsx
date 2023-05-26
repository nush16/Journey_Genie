import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./Headerstyles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  // function called 'onLoad' that takes a parameter 'fillC' and sets the 'autocomplete' state with that value
  const onLoad = (fillC) => setAutocomplete(fillC);

  //event handler for when the selected place in the autocomplete component changes
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat(); // Retrieves the latitude from the selected place using the autocomplete component.
    const lng = autocomplete.getPlace().geometry.location.lng(); // Retrieves the longitude from the selected place using the autocomplete component.

    setCoordinates({ lat, lng }); // Sets the 'coordinates' state with the extracted latitude and longitude.
  };

  return (
    // App bar at the top of the page
    <AppBar position="static">
      {/* Contains the content of the app bar */}
      <Toolbar className={classes.toolbar}>
        {/* Display the logo of the app */}
        <Typography variant="h5" className={classes.title}>
          Logo
        </Typography>
        <Box display="flex">
          {/* display Subtitle with additional information */}
          <Typography variant="h6" className={classes.title}>
            Where do I want to go?
          </Typography>
          {/* Allows users to select from a predefined set of options */}
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            {/* Represents the search bar container */}
            <div className={classes.search}>
              {/* Contains the search icon */}
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              {/* Represents the text input for the search bar */}
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
