import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router";


//API
import { getAllPeople } from '../api/starwars/starwarsApi'
import {connect} from 'react-redux';
import { setPeoples, setLoading } from '../store';

//UI components
import Header from "../components/Header";
import Footer from "../components/Footer";

//Helpers
import getIdFromUrl from '../utils/getIdFromUrl'


const mapStateToProps = (state) => {
	return {
		ui: state.ui,
		peoples: state.starWars.peoples,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
    setPeoples: (peoples) => dispatch(setPeoples(peoples)),
    setLoading: (state) => dispatch(setLoading(state))
	};
};

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

const Peoples = ({peoples, setPeoples}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if(peoples.length === 0) {
      setLoading(true)
      getAllPeople().then(res => {
        setPeoples(res)
        setLoading(false)
      }) 
    }
  }, [])

  const viewUserDetails = (url) => {
    history.push(`/people/${getIdFromUrl(url)}`)
  }

  return(
    <>
    <Header page="people"/>
    <List className={classes.root}>
      {peoples.map((person, i) => (
          <Box className={classes.item}>
            <ListItem key={i} onClick={() => viewUserDetails(person.url)} alignItems="flex-start" >
            <ListItemAvatar>
              <Avatar alt={person.name} />
            </ListItemAvatar>
            <ListItemText
              primary={person.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {person.gender}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {i !== peoples.length-1 && <Divider variant="inset" component="li" />}
          </Box>
      ))}
    </List>
    <Footer/>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Peoples);