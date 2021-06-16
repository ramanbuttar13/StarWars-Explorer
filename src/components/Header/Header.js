import React from 'react';
import Logo from '../../static/logo.jpeg';
import { Link } from 'react-router-dom';
import {
  Wrapper,
} from './Header.components';
import Button from '@material-ui/core/Button';

const Header = ({ page }) => {

  return (
    <Wrapper>
      <Link to="/"><img src={Logo} alt="logo"/></Link>
      <Link to="/peoples">
        <Button variant={page === 'people' ? 'outlined': 'contained'} color={page === 'people' ? 'secondary': 'primary'}>
          People
        </Button>
      </Link>
      <Link to="/planets">
        <Button variant={page === 'planet' ? 'outlined': 'contained'} color={page === 'planet' ? 'secondary': 'primary'}>
          Planets
        </Button>
      </Link>
      <Link to="/movies">
        <Button  variant={page === 'movies' ? 'outlined': 'contained'} color={page === 'movies' ? 'secondary': 'primary'}>
          Movies
        </Button>
      </Link>
    </Wrapper>
  );
};

export default Header;
