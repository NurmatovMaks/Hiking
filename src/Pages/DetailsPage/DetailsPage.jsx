import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import CommentBody from "../../Components/Comments/CommentBody";
import Comments from "../../Components/Comments/Comments";
import { cartContext } from "../../context/CartContext";

const DetailsPage = () => {
  const { getDetails, ticketDetails } = useContext(cartContext);
  const params = useParams();
  useEffect(() => {
    getDetails(params.id);
  }, []);
  return (
    <div className="detail">
      {ticketDetails ? (
        <div className="detail-page">
          <div className="detail-image">
            <img
              style={{ maxWidth: "60em", maxHeight: "40em" }}
              src={ticketDetails.image}
              alt=""
            />
          </div>
          <div className="detail-info">
            <h2>{ticketDetails.data}</h2>
            <h3>{ticketDetails.info}</h3>

            <div>
              <p>{ticketDetails.description}</p>
            </div>

            {/* <Button size="small" onClick={() => addAndDelInCart(carDetails)}>
              {checkInCart(carDetails.id) ? (
                <h2>Requested</h2>
              ) : (
                <h2>Make a request</h2>
              )}
            </Button> */}
            <Comments />
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailsPage;
