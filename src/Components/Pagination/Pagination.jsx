import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const Pagination = () => {
  const { getTickets, totalPosts, postPerPage, handlePage, currentPage } =
    useContext(cartContext);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="">
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className="pagBtn"
              style={{
                background: page === currentPage ? "#fd7e14" : "white",
              }}
              onClick={() => handlePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
