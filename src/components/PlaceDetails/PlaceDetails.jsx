import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./PlaceDetailstyles.js";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  // Checks if the 'selected' prop is true.
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    // Returns a Card component with elevation set to 6 for a raised appearance
    <Card elevation={6} className={classes.card}>
      <CardMedia // Displays media content within the Card component
        style={{ height: 350 }} // Sets the height of the media content
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        } // Sets the image source for the media content, with a fallback URL if the photo is not available.
        title={place.name} // Sets the title attribute for the media content
      />
      {/* Contains the main content of the Card */}
      <CardContent>
        {/* Displays the name of the place with a heading variant */}
        <Typography gutterBottom variant="h4">
          {place.name}
        </Typography>
        {/* Creates a box container */}
        <Box display="flex" justifyContent="space-between" my={2}>
          {/* Displays a rating component with the place's rating value */}
          <Rating name="read-only" value={Number(place.rating)} readOnly />
          {/* Shows the number of reviews for the place */}
          <Typography component="legend">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </Typography>
        </Box>
        {/* Creates a box container */}
        <Box display="flex" justifyContent="space-between">
          {/* Displays a label for the price level */}
          <Typography component="legend">Price</Typography>
          {/* Shows the price level of the place */}
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        {/* Creates a box container */}
        <Box display="flex" justifyContent="space-between">
          {/* Displays a label for the ranking */}
          <Typography component="legend">Ranking</Typography>
          {/* Shows the ranking of the place */}
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map(
          (
            award // Checks if there are awards for the place and maps through them to display each award
          ) => (
            // Creates a box container
            <Box
              display="flex"
              justifyContent="space-between"
              my={1}
              alignItems="center"
            >
              {/* Displays an image for the award */}
              <img src={award.images.small} alt={award.display_name} />
              {/* Shows the name of the award */}
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box>
          )
        )}
        {place?.cuisine?.map(
          (
            { name } // Checks if there is cuisine information for the place and maps through the cuisines to display each one.
          ) => (
            <Chip
              key={name}
              size="small"
              label={name}
              className={classes.chip}
            /> // Displays a chip component for each cuisine.
          )
        )}
        {place.address && ( // Checks if there is an address for the place and displays it.
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && ( // Checks if there is a phone number for the place and displays it.
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      {/* contains the actions or buttons associated with the Card */}
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
          className={classes.links}
        >
          Trip Advisor
          {/* Shows a button to open the place's Trip Advisor page */}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
          className={classes.links}
        >
          Website
          {/* Shows a button to open the place's website */}
        </Button>
      </CardActions>
    </Card>
  );
};
export default PlaceDetails;
