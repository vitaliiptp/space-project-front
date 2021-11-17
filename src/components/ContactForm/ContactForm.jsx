import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    background: "rgba(14,16,19,0.87)",
    backdropFilter: "blur(1.5rem)",
    fontFamily: "Impact",

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },

    "& .MuiFormLabel-root": {
      color: "white",
    },

    "& .MuiInputBase-root": {
      color: "white",
    },

    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
      background: "linear-gradient(45deg, #263237 30%, #3B464B 90%)",
      border: "solid 1px white",
      "&:hover": {
        transform: "scale(1.01)",
      },
    },
  },
}));

const ContactForm = ({ openContactModal, handleCloseContactModal }) => {
  const classes = useStyles();
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    axios.post("/api/contact",
    {name: name.value, email: email.value, message: message.value},
    {headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    })
    .then((data) => {
      console.log(data);
      Swal.fire(data.data.status);
    })

    setStatus("Submit");
  };

  return (
    <Dialog open={openContactModal} onClose={handleCloseContactModal}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="First Name, Last Name"
          variant="filled"
          required
        />
        <TextField
          name="email"
          label="Email"
          variant="filled"
          type="email"
          required
        />
        <TextField
          name="message"
          label="Message"
          variant="filled"
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleCloseContactModal}
        >
          {status}
        </Button>
      </form>
    </Dialog>
  );
};

export default ContactForm;

