import React,{useState} from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './Liststyles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx'

const List = () => {
    const classes = useStyles();
    // State for the selected type
    const [type, setType] = useState('');
    // State for the selected type
    const[rating, setRating] = useState('');
    
    // Dummy to render on lists
    const place = [{name:'TBA'}, {name:'TBA'}, {name:'TBA'}, {name:'TBA'}];

    return (
        <div className={classes.container}>
            {/* Heading */}
            <Typography variant="h4">Whats Around Me?</Typography>
                 {/* Type filter */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Type</InputLabel>
                    {/* Selecting the type */}
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>

                {/* Rating filter */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="rating">Rating</InputLabel>
                    {/* Selecting the rating */}
                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="3">Above 3.0</MenuItem>
                        <MenuItem value="4">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                    </FormControl>
                
                {/* Display the place */}
                <Grid container spacing={3} className={classes.list}>
                    {/* Rendering place details */}
                    {place?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                  </Grid>
            ))}
          </Grid>
    </div>
  );
};


export default List;