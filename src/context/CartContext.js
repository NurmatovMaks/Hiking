import axios from "axios";
import React, { createContext, useReducer } from "react";
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
  const getTickets = async () => {
    try {
      let filter = window.location.search;
      const response = await axios(`${API}${filter}`);
      // console.log(response);
      let action = {
        type: "GET_TICKETS",
        payload: response.data,
      };
      dispatch(action);
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
  return (
    <cartContext.Provider
      value={{
        getTickets,
        getDetails,
        tickets: state.tickets,
        ticketDetails: state.ticketDetails,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
