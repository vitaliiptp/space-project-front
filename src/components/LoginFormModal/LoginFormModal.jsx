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



const LoginFormModal = ({ openLoginModal, handleCloseLoginModal, handleShowSignupModal }) => {
    const classes = useStyles();
    // create state variables for each input

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
        handleCloseLoginModal();
    };

    const redirectToSignupModal = () => {
        handleCloseLoginModal();
        handleShowSignupModal();
    }

    return (
        <Dialog open={openLoginModal} onClose={handleCloseLoginModal}>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="text-accent ff-sans-cond letter-spacing-3 redirect-link">
                    <p onClick={redirectToSignupModal}>Want to register?</p>
                </div>
                <div>
                    <Button type="submit" variant="contained" color="primary" onClick={handleCloseLoginModal}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Log in
                    </Button>
                </div>
            </form>
        </Dialog>
    );
};

export default LoginFormModal;



