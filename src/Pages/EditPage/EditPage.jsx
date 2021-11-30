import { TextField } from "@mui/material";
import { Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as yup from "yup";
import { adminContext } from "../../context/AdminContext";
import Button from "@mui/material/Button";

const EditPage = () => {
  const schema = yup.object({
    image: yup.string().min(1).max(10000).required("Обязательно"),
    data: yup.string().min(1).max(200).required("Обязательно"),
    info: yup.string().min(1).max(200).required("Обязательно"),
    description: yup.string().min(1).max(1000).required("Обязательно"),
  });
  const params = useParams();
  // console.log(params);
  const { getTicketsToEdit, ticketToEdit, saveEditedTicket } =
    useContext(adminContext);
  useEffect(() => {
    getTicketsToEdit(params.id);
  }, []);
  // console.log(getTicketsToEdit(params));
  const navigate = useNavigate();

  return (
    <div className="edit-page">
      {ticketToEdit ? (
        <Formik
          validationSchema={schema}
          initialValues={ticketToEdit}
          onSubmit={(editedTicket) => {
            saveEditedTicket(editedTicket);
            navigate("/admin");
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
                label="data"
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
              <Button color="primary" variant="outlined" type="submit">
                Edit Ticket
              </Button>
            </form>
          )}
        </Formik>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default EditPage;
