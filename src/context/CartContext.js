import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../helpers/API";

export const cartContext = createContext();

const INIT_STATE = {
  tickets: null,
  ticketDetails: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TICKETS":
      return { ...state, tickets: action.payload };
    case "GET_DETAILS":
      return { ...state, ticketDetails: action.payload };
    default:
      return state;
  }
};
const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getClientTickets = async () => {
    try {
      let filter = window.location.search;
      const response = await axios(`${API}${filter}`);
      // console.log(response);
      let action = {
        type: "GET_TICKETS",
        payload: response.data,
      };
      dispatch(action);
      resetCurrentPage();
    } catch (e) {
      console.log(e);
    }
  };

  const getDetails = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_DETAILS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // pagination

  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  useEffect(() => {
    if (state.tickets) {
      const data = state.tickets;
      setPost(data);
    }
  }, [state.tickets]);

  const numberOfLastPost = currentPage * postPerPage;
  const numberOfFirstPost = numberOfLastPost - postPerPage;
  const currentPost = post.slice(numberOfFirstPost, numberOfLastPost);
  const totalPosts = post.length;
  const handlePage = (newPage) => {
    setCurrentPage(newPage);
  };
  function resetCurrentPage() {
    setCurrentPage(1);
  }
  return (
    <cartContext.Provider
      value={{
        getClientTickets,

        getDetails,
        handlePage,
        tickets: state.tickets,
        ticketDetails: state.ticketDetails,
        currentPost,
        totalPosts,
        postPerPage,
        currentPage,
        post,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
