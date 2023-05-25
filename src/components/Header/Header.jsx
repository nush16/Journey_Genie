import React from "react";
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './Headerstyles';

const Header = () => {
    const classes = useStyles();
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
                    <Typography variant ="h6" className={classes.title}>
                        Whats around me?
                    </Typography>
                    {/* Allows users to select from a predefined set of options */}
                    {/* <Autocomplete> */}
                    {/* Represents the search bar container */}
                        <div className={classes.search}>
                            {/* Contains the search icon */}
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            {/* Represents the text input for the search bar */}
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>       
            </Toolbar>
        </AppBar>
    );
}

export default Header;