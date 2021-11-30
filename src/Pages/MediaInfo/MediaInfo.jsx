import React, { useContext, useEffect } from "react";
import { adminContext } from "../../context/AdminContext";

export const MediaInfo = () => {
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
  console.log(tickets);
  return (
    <>
      {tickets ? (
        tickets.map((ticket) => (
          <div className="detail-page">
            <div className="detail-image">
              <img
                src={ticket.image}
                style={{ maxWidth: "60em", maxHeight: "40em" }}
                alt=""
              />
            </div>
            <div className="detail-info">
              <h1>{ticket.info}</h1>

              <h4>
                {ticket.data.slice(8, 10)}-{ticket.data.slice(5, 7)}-
                {ticket.data.slice(0, 4)}
              </h4>
              <span>{ticket.description}</span>
            </div>
          </div>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default MediaInfo;
