import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { adminContext } from "../../context/AdminContext";

const AllTicketsPage = () => {
  const { tickets, getTickets } = useContext(adminContext);
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
    <div className="allCard">
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
                  <p>ssssss</p>
                </CardActions>
              </Card>
            </div>
          </div>
        ))
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  );
};

export default AllTicketsPage;
