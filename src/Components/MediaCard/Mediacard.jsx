import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { adminContext } from "../../context/AdminContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import "./assets/MediaCard.css";

export const Mediacard = () => {
  const { tickets, getTickets, deleteTicket } = useContext(adminContext);
  const monthes = [
    "January",
    "February",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <div>
      <div className="mainCard">
        {tickets ? (
          tickets.map((item) => (
            <div className="media">
              <div key={item.id}>
                <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    style={{ objectFit: "contain" }}
                    image={item.image}
                    alt=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.info}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.data.slice(8, 10)}-{item.data.slice(5, 7)}-
                      {item.data.slice(0, 4)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`edit/${item.id}`}>
                      <Button color="warning" variant="outlined">
                        Edit
                      </Button>
                    </Link>
                    <Button onClick={() => deleteTicket(item.id)}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          ))
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Mediacard;
