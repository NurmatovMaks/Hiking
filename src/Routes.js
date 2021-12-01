import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import AdminContextProvider from "./context/AdminContext";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import CommentContextProvider from "./context/CommentContext";
import AddPage from "./Pages/AddPage/AddPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AllTicketsPage from "./Pages/AllTicketsPage/AllTicketsPage";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";
import EditPage from "./Pages/EditPage/EditPage";
import FavoritPages from "./Pages/Favorit/FavoritPages";
import MainPage from "./Pages/MainPage";
import MediaInfo from "./Pages/MediaInfo/MediaInfo";

const MyRoutes = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <AdminContextProvider>
          <CommentContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/admin/add" element={<AddPage />} />
                <Route path="admin/edit/:id" element={<EditPage />} />
                <Route path="/details" element={<MediaInfo />} />
                <Route path="/all-tickets" element={<AllTicketsPage />} />
                <Route path="/details/:id" element={<DetailsPage />} />
                <Route path="/favorit" element={<FavoritPages />} />
              </Routes>
            </BrowserRouter>
          </CommentContextProvider>
        </AdminContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default MyRoutes;
