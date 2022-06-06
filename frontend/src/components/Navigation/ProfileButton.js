import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  const myProfile = (e) => {
    e.preventDefault();
    history.push(`/profile/${user.id}`);
    setShowMenu(false);
  };

  return (
    <>
      <button onClick={openMenu} id="navigation-logout">
        <i className="fa-solid fa-user-ninja"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
          <div id="dropdown-username">
            <span>{user.username}</span>
          </div>
          <button onClick={myProfile}>My Profile</button>
          <button onClick={logout} id="logout-button">Logout</button>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
