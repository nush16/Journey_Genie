import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import useStyles from "./Liststyles.js";
import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx";

const List = ({
  places,
  childClicked,
  loading,
  type,
  setType,
  rating,
  setRating,
}) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    // Runs the effect when the component mounts or when the 'places' dependency changes
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    ); // Sets the 'elRefs' state to an array of refs created using 'createRef()' for each place.
  }, [places]);

  // Dummy to render on lists
  // const place = [{name:'TBA'}, {name:'TBA'}, {name:'TBA'}, {name:'TBA'}];

  return (
    <div className={classes.container}>
      {/* Heading */}
      <Typography variant="h4" className={classes.title}>
        Whats Around Me?
      </Typography>
      {loading ? ( // Checks if isLoading is true.
        // Renders a loading indicator container with the 'loading' class
        <div className={classes.loading}>
          {/* Renders a CircularProgress component */}
          <CircularProgress size="5rem" />
        </div>
      ) : (
        // If isLoading is false, renders the following content.
        // Wrraping in React fragment
        <>
          {/* Type filter */}
          <FormControl className={classes.formControl}>
            <InputLabel id="type" className={classes.listItem}>
              Type
            </InputLabel>
            {/* Selecting the type */}
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={classes.listItem}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          {/* Rating filter */}
          <FormControl className={classes.formControl}>
            <InputLabel id="rating" className={classes.listItem}>
              Rating
            </InputLabel>
            {/* Selecting the rating */}
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className={classes.listItem}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>

          {/* Display the place */}

          <Grid container spacing={3} className={classes.list}>
            {/* Rendering place details */}
            {places?.map(
              (
                place,
                i // Maps through the 'places' array to render place details
              ) => (
                <Grid item key={i} xs={12}>
                  <PlaceDetails
                    place={place} // Passes the current place object as a prop to the PlaceDetails component
                    selected={Number(childClicked) === i} // Checks if the current place is selected based on the childClicked state
                    refProp={elRefs[i]} // Passes the corresponding ref as a prop to the PlaceDetails component
                  />
                </Grid>
              )
            )}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
