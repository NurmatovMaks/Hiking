import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { adminContext } from "../../context/AdminContext";
import Pagination from "../Pagination/Pagination";

export const FlipCard = () => {
  const { tickets, getTickets, get10Tickets } = useContext(adminContext);
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
    get10Tickets();
  }, []);
  return (
    <div className="tour">
      {tickets ? (
        tickets.map((item) => (
          <>
            <a className="link-card" href="http://localhost:3000/all-tickets">
              <div
                className="tour-img"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="portfolio">
                  <div className="portfolio-time">
                    <div className="portfolio-day">
                      {item.data.slice(8, 10)}
                    </div>
                    <div className="portfolio-month">
                      {monthes[parseInt(item.data.slice(5, 7) - 1)]}
                    </div>
                    <div className="portfolio-year">
                      {item.data.slice(0, 4)}
                    </div>
                  </div>
                  <div className="portfolio-details">
                    <div className="portfolio-title">{item.info}</div>
                    <div className="portfolio-cat">Music, Single</div>
                    <div className="portfolio-comments">
                      <i className="fa fa-comments"></i>0
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio">
                <div className="portfolio-time">
                  <div className="portfolio-day">{item.data.slice(8, 10)}</div>
                  <div className="portfolio-month">
                    {monthes[parseInt(item.data.slice(5, 7) - 1)]}
                  </div>
                  <div className="portfolio-year">{item.data.slice(0, 4)}</div>
                </div>
                <div className="portfolio-details">
                  <div className="portfolio-title">{item.info}</div>
                  <div className="portfolio-cat">Music, Single</div>
                  <div className="portfolio-comments">
                    <i className="fa fa-comments"></i>0
                  </div>
                </div>
              </div>
            </a>
          </>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default FlipCard;
