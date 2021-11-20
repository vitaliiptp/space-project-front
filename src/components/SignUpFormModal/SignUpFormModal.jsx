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

const SignUpFormModal = ({
  openSignupModal,
  handleCloseSignupModal,
  handleShowLoginModal,
  handleEmail,
  email,
  handleLoginStatus,
}) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("/api/users/register", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        handleLoginStatus();
        Swal.fire(response.data);
      })
      .catch((err) => {
        Swal.fire("Error logging in please try again");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseSignupModal();
  };

  const redirectToLoginModal = () => {
    handleCloseSignupModal();
    handleShowLoginModal();
  };

  return (
    <Dialog open={openSignupModal} onClose={handleCloseSignupModal}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          defaultValue={email}
          onChange={handleEmail}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <div className="text-accent ff-sans-cond letter-spacing-3 redirect-link">
            <a onClick={redirectToLoginModal}>Already registered?</a>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleCloseSignupModal}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={register}
          >
            Sign up
          </Button>
        </div>
      </form>
    </Dialog>
  );
};

export default SignUpFormModal;
