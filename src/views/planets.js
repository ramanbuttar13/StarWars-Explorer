import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router";


//API
import { getAllPlanets } from '../api/starwars/starwarsApi'
import {connect} from 'react-redux';
import { setPlanets, setLoading } from '../store';

//UI components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Helpers
import getIdFromUrl from '../utils/getIdFromUrl'

const mapStateToProps = (state) => {
	return {
		ui: state.ui,
		planets: state.starWars.planets,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
    setPlanets: (planets) => dispatch(setPlanets(planets)),
    setLoading: (state) => dispatch(setLoading(state))
	};
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '50px 50px 110px 50px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    border: '1px solid black',
    borderRadius: '20px',
    padding: '50px',
    [theme.breakpoints.down('sm')]: {
      padding: '20px',
      margin: '20px 20px 110px 20px'
    },
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    padding: '10px',
    margin: '10px 15px',
    cursor: 'pointer',
    border: '1px solid rgb(17, 46, 81)',
    borderRadius: '20px',
    minHeight: '100px'
  },
  inline: {
    display: 'inline',
  },
}));

const Planets = ({planets, setPlanets, setLoading}) => {
  const classes = useStyles();
  const history = useHistory();


useEffect(() => {
  if(planets.length === 0) {
    setLoading(true)
    getAllPlanets().then(res => {
      setPlanets(res)
      setLoading(false)
    }) 
  }
}, [])

  return(
    <>
    <Header  page="planet"/>
    <List className={classes.root}>
      {planets.map((planet, i) => (
          <Box className={classes.item}>
            <ListItem onClick={() => history.push(`/planet/${getIdFromUrl(planet.url)}`)} alignItems="flex-start">
            <ListItemText
              primary={'Name: '+planet.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    fontWeight="700"
                  >
                    {'Diameter: '+planet.diameter}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {i !== planet.length-1 && <Divider component="li" />}
          </Box>
      ))}
    </List>
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
