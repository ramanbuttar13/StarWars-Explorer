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
import { getAllMovies } from '../api/starwars/starwarsApi'
import {connect} from 'react-redux';
import { setLoading, setMovies } from '../store';


//UI components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Helpers
import getIdFromUrl from '../utils/getIdFromUrl'


const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    margin: '50px 50px 110px 50px',
    // maxWidth: '36ch',
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

const mapStateToProps = (state) => {
	return {
		ui: state.ui,
		movies: state.starWars.movies,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
    setMovies: (movies) => dispatch(setMovies(movies)),
    setLoading: (state) => dispatch(setLoading(state))
	};
};

const Movies = ({movies, setMovies, setLoading}) => {
  const classes = useStyles();
  const history = useHistory();


useEffect(() => {
    if(movies.length === 0) {
      setLoading(true)
      getAllMovies().then(res => {
        setMovies(res)
        setLoading(false)
      })  
    }
}, []);

  return(
    <>
    <Header  page="movies"/>
    <List className={classes.root}>
      {movies.map((movie, i) => (
          <Box className={classes.item} key={i}>
            <ListItem onClick={() => history.push(`/movie/${getIdFromUrl(movie.url)}`)} alignItems="flex-start" >
            <ListItemText
              primary={movie.title}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    By: {movie.director}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {i !== movie.length-1 && <Divider component="li" />}
          </Box>
      ))}
    </List>
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
