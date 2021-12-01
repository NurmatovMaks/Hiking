import {
  TableCell,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContext";

const FavoritPages = () => {
  const { getFavorit, favorit } = useContext(cartContext);
  useEffect(() => {
    getFavorit();
  }, []);
  console.log(favorit);
  return (
    <>
      {favorit ? (
        favorit.tickets.length > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">image</TableCell>
                  <TableCell align="right">information</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {favorit.tickets.map((item) => (
                  <TableRow
                    key={item.ticket.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.ticket.info}
                    </TableCell>
                    <TableCell align="right">
                      <img width="50" src={item.ticket.image} alt="" />
                    </TableCell>
                    <TableCell align="right">
                      {item.ticket.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h2>favorit is empty</h2>
        )
      ) : (
        <h2>loading...</h2>
      )}
    </>
  );
};

export default FavoritPages;
