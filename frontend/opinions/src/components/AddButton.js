import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  btn: {justifyContent:"center",
  alignItems:"center",

    margin: '20px 45px 20px 20px',
    color: "white",
    border: "3px solid white",
    backgroundColor:"#fca5a5",
    outline: "none",
    borderRadius: '10px',
    padding: '20px 20px 20px 20px',
    fontWeight: "bold",
    fontSize: "18px",
      '&:hover': {
        background: '#fecdd3',
        outline: 'none',
        border: 'none',
        borderRadius: '0px',
        border: "3px solid #fca5a5",
        padding: '20px 20px 20px 20px',
        fontWeight: "bold",
        fontSize: "18px",
      }
  }
}));

export function AddButton({handleOpen}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={handleOpen} className={classes.btn} >Ajoter un opinion</Button>
    </div>
  );
}