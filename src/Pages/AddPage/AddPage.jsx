import { Formik } from "formik";
import React, { useContext } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { adminContext } from "../../context/AdminContext";
import { TextField } from "@mui/material";
import Button from "@restart/ui/esm/Button";

const AddPage = () => {
  const schema = yup.object({
    image: yup.string().min(1).max(10000).required("Обязательно"),
    data: yup.string().min(1).max(200).required("Обязательно"),
    info: yup.string().min(1).max(200).required("Обязательно"),
    description: yup.string().min(1).max(1000).required("Обязательно"),
  });

  const { addTicket } = useContext(adminContext);
  const navigate = useNavigate();
  const handleSubmit = (ticket) => {
    addTicket(ticket);
    navigate("/admin");
  };

  return (
    <div className="add-page">
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          image: "",
          data: "",
          info: "",
          description: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="image"
              variant="filled"
              type="text"
              name="image"
              value={values.image}
              error={!!errors.image && touched.image}
              helperText={touched.image ? errors.image : ""}
              onChange={handleChange}
            />
            <TextField
              label=""
              variant="filled"
              type="date"
              name="data"
              value={values.data}
              error={!!errors.data && touched.data}
              helperText={touched.data ? errors.data : ""}
              onChange={handleChange}
            />
            <TextField
              label="info"
              variant="filled"
              type="text"
              name="info"
              value={values.info}
              error={!!errors.info && touched.info}
              helperText={touched.info ? errors.info : ""}
              onChange={handleChange}
            />
            <TextField
              label="description"
              variant="filled"
              type="text"
              name="description"
              value={values.description}
              error={!!errors.description && touched.description}
              helperText={touched.description ? errors.description : ""}
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Add ticket
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default AddPage;
