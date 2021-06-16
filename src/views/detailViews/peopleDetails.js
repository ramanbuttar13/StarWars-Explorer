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
		peoples: state.starWars.peoples,
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

const PeopleDetails = ({peoples, match}) => {
  const classes = useStyles();
  const history = useHistory();
  const userId = match.params.id
  const person = peoples[userId-1];


  const rowData = (label, value) => {
  return (
  <>
    <Typography className={classes.label} color="textSecondary" gutterBottom>{label}</Typography>
    <Typography className={classes.detail} color="textPrimary" gutterBottom>{value}</Typography></>
    )
}

  return(
    <>
    <Header page="people"/>
    <Card className={classes.root} variant="outlined">
      {person ? <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {person.name}
        </Typography>
        {rowData('Name', person.name)}
        {rowData('Height', person.height)}
        {rowData('Mass', person.mass)}
        {rowData('Hair Color', person.hair_color)}
        {rowData('Skin Color', person.skin_color)}
        {rowData('Gender', person.gender)}
        {rowData('Birth Year', person.birth_year)}
      </CardContent>
      : 
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Whoops! User not found. Please Try again.
        </Typography>
      </CardContent>}
      <CardActions>
        <Button size="medium" onClick={() => history.push(`/peoples`)} variant='outlined' color='primary'>GoBack</Button>
      </CardActions>
    </Card>
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps)(PeopleDetails);