import React from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='top'>
        <h2>TrelloBoard</h2>
        <div>
          <Button color='inherit' href='/login'>
            Login
          </Button>
          <Button color='inherit' href='/register'>
            Sign Up
          </Button>
        </div>
      </nav>
    </section>
  );
};

export default Landing;
