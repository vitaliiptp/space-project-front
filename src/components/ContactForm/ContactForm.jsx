import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: 'rgba(14,16,19,0.87)',
    backdropFilter: 'blur(1.5rem)',
    fontFamily:'Impact',

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },

    '& .MuiFormLabel-root': {
      color: 'white'
    },

    '& .MuiInputBase-root': {
      color: 'white'
    },

    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
      background: 'linear-gradient(45deg, #263237 30%, #3B464B 90%)',
      border: 'solid 1px white',
      '&:hover': {
        transform: 'scale(1.01)'
      }
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
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };



  return (
      <Dialog open={openContactModal} onClose={handleCloseContactModal}>
        <form className={classes.root} onSubmit={handleSubmit}>

          <TextField
              label="First Name, Last Name"
              variant="filled"
              required
          />
          <TextField
              label="Email"
              variant="filled"
              type="email"
              required
          />
          <TextField
              label="Message"
              variant="filled"
              multiline
              rows={4}
              required
          />
          <Button type="submit" variant="contained" color="primary" onClick={handleCloseContactModal}>
            {status}
          </Button>
        </form>
      </Dialog>



    // <div className="form-main">
    //   <form className="form-container primary-navigation" onSubmit={handleSubmit}>
    //     <div className="form-container--name">
    //       <label htmlFor="name">Name:</label>
    //       <input className="form-container--input" type="text" id="name" required />
    //     </div>
    //     <div className="form-container--email">
    //       <label htmlFor="email">Email:</label>
    //       <input className="form-container--input" type="email" id="email" required />
    //     </div>
    //     <div className="form-container--message">
    //       <label htmlFor="message">Message:</label>
    //       <textarea className="form-container--input" id="message" required />
    //     </div>
    //     <button className="btn ff-sans-cond uppercase letter-spacing-2 text-white" type="submit">{status}</button>
    //   </form>
    // </div>
  );
};









export default ContactForm;








// import React, { useState } from "react";
//
// import { Modal, Button } from "react-bootstrap";
//
//
// const SignUpModal = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//
//
//   return(
//       <>
//         <Button className="nextButton" onClick={handleShow}>
//           Open Modal
//         </Button>
//
//         <Modal show={show} onHide={handleClose} backdrop='static' keyboard="false">
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//   )
// }
//
//
// export default SignUpModal;
