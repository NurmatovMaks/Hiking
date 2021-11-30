import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/API";
export const adminContext = createContext();

const INIT_STATE = {
  tickets: null,
  ticketToEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_TICKETS":
      return { ...state, tickets: action.payload };
    case "GET_TICKETS_TO_EDIT":
      return { ...state, ticketToEdit: action.payload };
    default:
      return state;
  }
};
const AdminContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // create

  const addTicket = async (ticket) => {
    try {
      const response = await axios.post(API, ticket);
      getTickets();
    } catch (error) {
      console.log(error);
    }
  };
  // get

  const getTickets = async () => {
    try {
      const response = await axios(API);
      let action = {
        type: "GET_TICKETS",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };

  // update

  const getTicketsToEdit = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_TICKETS_TO_EDIT",
        payload: response.data,
      };
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };
  // save edited ticket

  const saveEditedTicket = async (editedTicket) => {
    try {
      const response = await axios.patch(
        `${API}/${editedTicket.id}`,
        editedTicket
      );
      getTickets();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  // delete

  const deleteTicket = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      getTickets();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <adminContext.Provider
      value={{
        addTicket,
        getTickets,
        getTicketsToEdit,
        saveEditedTicket,
        deleteTicket,
        tickets: state.tickets,
        ticketToEdit: state.ticketToEdit,
      }}
    >
      {props.children}
    </adminContext.Provider>
  );
};

export default AdminContextProvider;
