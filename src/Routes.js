import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AdminContextProvider from "./context/AdminContext";
import CartContextProvider from "./context/CartContext";
import AddPage from "./Pages/AddPage/AddPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AllTicketsPage from "./Pages/AllTicketsPage/AllTicketsPage";
import EditPage from "./Pages/EditPage/EditPage";
import MainPage from "./Pages/MainPage";
import MediaInfo from "./Pages/MediaInfo/MediaInfo";

const MyRoutes = () => {
  return (
    <CartContextProvider>
      <AdminContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/add" element={<AddPage />} />
            <Route path="admin/edit/:id" element={<EditPage />} />
            <Route path="/details" element={<MediaInfo />} />
            <Route path="/all-tickets" element={<AllTicketsPage />} />
          </Routes>
        </BrowserRouter>
      </AdminContextProvider>
    </CartContextProvider>
  );
};

export default MyRoutes;
