import React from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './Liststyles.js';


const List = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            {/* Heading */}
            <Typography variant="h4">Whats Around Me?</Typography>
                 {/* Type filter */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Type</InputLabel>
                    {/* Selecting the type */}
                    <Select value={type} onChange={''}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>

                {/* Rating filter */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="rating">Rating</InputLabel>
                    {/* Selecting the rating */}
                    <Select value={type} onChange={''}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl>
    </div>
  );
};

export default List;