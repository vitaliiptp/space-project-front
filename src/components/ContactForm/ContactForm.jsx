import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Swal from "sweetalert2";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const sendContactForm = () => {
    setStatus("Sending...");
    axios
      .post(
        "https://space-project-back.herokuapp.com/api/contact",
        { name: name, email: email, message: message },
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          Swal.fire(response.data.msg);
          setStatus("Submit");
          handleCloseContactModal()
        } else {
          Swal.fire(response.data.msg);
          handleCloseContactModal();
        }
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseContactModal();
  };




  return (
    <Dialog open={openContactModal} onClose={handleCloseContactModal}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="First Name, Last Name"
          variant="filled"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          name="email"
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="message"
          label="Message"
          variant="filled"
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={sendContactForm}
        >
          {status}
        </Button>
      </form>
    </Dialog>
  );
};

export default ContactForm;
