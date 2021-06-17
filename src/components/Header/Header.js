import React from 'react';
import Logo from '../../static/logo.jpeg';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  ActionButtons
} from './Header.components';
import Button from '@material-ui/core/Button';

const Header = ({ page }) => {

  return (
    <Wrapper>
      <Link to="/"><img src={Logo} alt="logo"/></Link>
      <ActionButtons>
        <Link to="/peoples" style={{ textDecoration: 'none' }}>
          <Button variant={page === 'people' ? 'outlined': 'contained'} color={page === 'people' ? 'secondary': 'primary'}>
            People
          </Button>
        </Link>
        <Link to="/planets" style={{ textDecoration: 'none' }}>
          <Button variant={page === 'planet' ? 'outlined': 'contained'} color={page === 'planet' ? 'secondary': 'primary'}>
            Planets
          </Button>
        </Link>
        <Link to="/movies" style={{ textDecoration: 'none' }}>
          <Button  variant={page === 'movies' ? 'outlined': 'contained'} color={page === 'movies' ? 'secondary': 'primary'}>
            Movies
          </Button>
        </Link>
      </ActionButtons>
    </Wrapper>
  );
};

export default Header;
