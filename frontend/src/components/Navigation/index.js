//* React
import { useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaPhoenixFramework } from 'react-icons/fa';

//* Files & Components
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import UploadFormModal from '../UploadFormPage/UploadModal';
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
        <NavLink exact to="/" id='explore-route'>Explore</NavLink>
        <form id="nav-search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for title"
            required
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
        <SignupFormModal />
      </>
    );
  }

  return (
    <nav className="navigation">
      <Link to="/" id='nav-logo' className="navigation-logo">
        <FaPhoenixFramework />
        <span>Flickr</span>
      </Link>
      {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
