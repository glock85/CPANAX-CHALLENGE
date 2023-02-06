import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ title, brand, image }) {
  return (
    <Card
      sx={{
        maxWidth: 600,
      }}
    >
      <CardMedia component="img" height="350" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {brand}
        </Typography>
      </CardContent>
    </Card>
  );
}
