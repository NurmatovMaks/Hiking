import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Mediacard from "../../Components/MediaCard/Mediacard";

const AdminPage = () => {
  return (
    <div>
      <div className="admin-link">
        <Link to="/admin/add">
          <Button color="warning" variant="outlined">
            Add
          </Button>
        </Link>
      </div>
      <Mediacard />
    </div>
  );
};

export default AdminPage;
