import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
// import SignupFormPage from '../SignupFormModal/SignupForm';
import UploadFormModal from '../UploadFormPage/UploadModal';

import { GiMountainCave } from 'react-icons/gi';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
    setQuery('');
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink exact to="/" id='explore-route'> Explore </NavLink>
        <form id="nav-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>
        <UploadFormModal />
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <SignupFormPage /> */}
      </>
    );
  }

  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <GiMountainCave />
        <span>Flickr</span>
      </div>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
