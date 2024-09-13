import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActionArea, Divider, Grid } from "@mui/material";

export default function Cardwhy(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {props.title}
          </Typography>
        </CardContent>
        <Divider />

        <Grid item >
          <Avatar
            sx={{
              marginLeft: "40%",
              marginTop: "5%",
              backgroundColor: "rgb(129, 41, 114)",
            }}
          >
            {props.img}
          </Avatar>
        </Grid>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            fontSize="20px"
          >
            {props.name}
          </Typography>
          <a
            href={props.links}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="small" sx={{ marginLeft: "28%" }}>
              Learn More
            </Button>
          </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
