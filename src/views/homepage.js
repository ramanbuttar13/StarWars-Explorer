import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//UI-Components
import Header from "../components/Header";
import Footer from "../components/Footer";


const useStyles = makeStyles(() => ({
  welcomeText: {
    padding: '100px',
    fontSize: '24px'
  },
}));

const Homepage = () => {
  const classes = useStyles();
  
  return(
    <React.Fragment>
    <Header/>
    <Typography
      component="p"
      variant="body2"
      color="textPrimary"
      className={classes.welcomeText}
    >
      Let's explore the Star Wars. Click on any of the three buttons to get started!
    </Typography>
    <Footer/>
    </React.Fragment>
  )
}

export default Homepage;
