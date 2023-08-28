import React, { useState } from 'react';
import '../../Styles/NavLogin.css';

export function NavLogin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setShowLogoutModal(false);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value.slice(0, 20);
    setUsername(value);
  };

  const handleLoginModalToggle = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogoutModalToggle = () => {
    setShowLogoutModal(!showLogoutModal);
  };

  return (
    <>
      {!loggedIn ? (
        <button className="myButton" onClick={handleLoginModalToggle}>
          Login
        </button>
      ) : (
        <button className="myButton" onClick={handleLogoutModalToggle}>
          {username}
        </button>
      )}

      {showLoginModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Welcome, please log in</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleLoginModalToggle}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                  maxLength={20}
                />
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  maxLength={20}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLoginModalToggle}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Logout</h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleLogoutModalToggle}
                ></button>
              </div>
              <div className="modal-body">Are you sure you want to logout?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleLogoutModalToggle}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}