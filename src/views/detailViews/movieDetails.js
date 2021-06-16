import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router";

//Store
import {connect} from 'react-redux';

//UI components
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const mapStateToProps = (state) => {
	return {
		movies: state.starWars.movies,
	};
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '300px',
    margin: '50px auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    border: '1px solid black',
    borderRadius: '20px',
    padding: '50px',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontWeight: '700',
    fontSize: '24px'
  },
  label: {
    fontWeight: '700',
    fontSize: '16px',
    marginRight: '16px',
  },
  detail: {
    fontWeight: '500',
    fontSize: '16px',
  },
  inline: {
    display: 'inline',
  },
}));

const MovieDetails = ({movies, match}) => {
  const classes = useStyles();
  const history = useHistory();
  const userId = match.params.id
  const movie = movies[userId-1];

  const rowData = (label, value) => {
  return (
  <>
    <Typography className={classes.label} color="textSecondary" gutterBottom>{label}</Typography>
    <Typography className={classes.detail} color="textPrimary" gutterBottom>{value}</Typography></>
    )
}

  return(
    <>
    <Header page="movies"/>
    <Card className={classes.root} variant="outlined">
      {movie ? <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {movie.title}
        </Typography>
        {rowData('Title', movie.title)}
        {rowData('Director', movie.director)}
        {rowData('Producers', movie.producer)}
        {rowData('Release Date', movie.release_date)}
      </CardContent>
      : 
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Whoops! Movie not found. Please Try again.
        </Typography>
      </CardContent>}
      <CardActions>
        <Button size="medium" onClick={() => history.push(`/movies`)} variant='outlined' color='primary'>GoBack</Button>
      </CardActions>
    </Card>
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps)(MovieDetails);