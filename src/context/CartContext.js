import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../helpers/API";

export const cartContext = createContext();

const INIT_STATE = {
  tickets: null,
  ticketDetails: null,
  ticketsCountInCart: localStorage.getItem("favorit")
    ? JSON.parse(localStorage.getItem("favorit")).tickets.length
    : 0,
  favorit: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TICKETS":
      return { ...state, tickets: action.payload };
    case "GET_DETAILS":
      return { ...state, ticketDetails: action.payload };
    case "Add_Del_In-Cart":
      return { ...state, ticketsCountInCart: action.payload };
    case "GET_FAVORIT":
      return { ...state, favorit: action.payload };
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

  const addAndDelInFavorit = (ticket) => {
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    console.log(favorit);

    if (!favorit) {
      favorit = {
        tickets: [],
      };
    }
    let tour = {
      ticket: ticket,
      count: 1,
    };
    let chekArr = favorit.tickets.filter((i) => {
      return i.ticket.id === ticket.id;
    });
    if (chekArr.length === 0) {
      favorit.tickets.push(tour);
    } else {
      favorit.tickets = favorit.tickets.filter((i) => {
        return i.ticket.id !== ticket.id;
      });
    }
    localStorage.setItem("favorit", JSON.stringify(favorit));
    let action = {
      type: "Add_Del_In-Cart",
      payload: favorit.tickets.length,
    };
    dispatch(action);
  };

  const chekInFavorit = (id) => {
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    if (!favorit) {
      favorit = {
        tickets: [],
      };
    }
    let chekArr = favorit.tickets.filter((i) => {
      return i.ticket.id === id;
    });
    if (chekArr.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const getFavorit = () => {
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    if (!favorit) {
      favorit = {
        tickets: [],
      };
    }
    let action = {
      type: "GET_FAVORIT",
      payload: favorit,
    };
    dispatch(action);
  };
  const changeCountInFavorit = (count, id) => {
    if (count < 1) {
      return;
    }
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    favorit.tickets = favorit.tickets.map((i) => {
      if (i.ticket.id === id) {
        i.count = count;
      }
      return i;
    });
    localStorage.setItem("favorit", JSON.stringify(favorit));
    getFavorit();
  };

  return (
    <cartContext.Provider
      value={{
        getClientTickets,

        getDetails,
        handlePage,
        changeCountInFavorit,
        getFavorit,
        addAndDelInFavorit,
        chekInFavorit,
        tickets: state.tickets,
        ticketDetails: state.ticketDetails,
        ticketsCountInCart: state.ticketsCountInCart,
        favorit: state.favorit,
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
