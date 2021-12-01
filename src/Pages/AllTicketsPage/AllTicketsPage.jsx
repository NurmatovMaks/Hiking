import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Pagination from "../../Components/Pagination/Pagination";
import { adminContext } from "../../context/AdminContext";
import { cartContext } from "../../context/CartContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import iconCard from "../../images/icons/iconCard.png";
import { Link } from "react-router-dom";

const AllTicketsPage = () => {
  const { tickets, getTickets } = useContext(adminContext);
  const { currentPost, getClientTickets, chekInFavorit, addAndDelInFavorit } =
    useContext(cartContext);
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  let object = new URLSearchParams(window.location.search);
  function filterTickets(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    setInfo(value);
    getClientTickets();
  }
  useEffect(() => {
    setInfo(object.get("info"));
  }, [object]);

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
    getClientTickets();
  }, []);
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <div className="allTickets">
      <div className="search">
        <input
          className="search-input"
          onChange={(e) => filterTickets("q", e.target.value)}
          style={{ borderRadius: "10px", marginLeft: "10px" }}
          type="text"
          placeholder="Search"
        />
        <FormControl style={{ marginLeft: "20px" }} component="fieldset">
          <RadioGroup
            value={info}
            onChange={(e) => filterTickets("info", e.target.value)}
            row
            aria-label="gender"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Jeti-Oguz"
              control={<Radio />}
              label="Jeti-Oguz"
            />
            <FormControlLabel
              value="Ala-Kul"
              control={<Radio />}
              label="Ala-Kul"
            />
            <FormControlLabel
              value="Ala-Archa"
              control={<Radio />}
              label="Ala-Archa"
            />
            <FormControlLabel
              value="Toktogul"
              control={<Radio />}
              label="Toktogul"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="allCard">
        {currentPost ? (
          currentPost.map((item) => (
            <div className="all">
              <div className="media">
                <div key={item.id}>
                  <Card sx={{ maxWidth: 300, minWidth: 300 }}>
                    <Link to={`/details/${item.id}`}>
                      <CardMedia
                        component="img"
                        height="140"
                        style={{ objectFit: "contain" }}
                        image={item.image}
                        alt=""
                      />
                    </Link>
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
                      {chekInFavorit(item.id) ? (
                        <Button
                          onClick={() => addAndDelInFavorit(item)}
                          color="warning"
                          variant="contained"
                        >
                          <img src={iconCard} width="20px" alt="" />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => addAndDelInFavorit(item)}
                          color="warning"
                          variant="outlined"
                        >
                          <img src={iconCard} width="20px" alt="" />
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>loading...</h2>
        )}
      </div>
      <div className="alaPagination">
        <Pagination />
      </div>
    </div>
  );
};

export default AllTicketsPage;
