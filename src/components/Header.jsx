import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="header__text--tagline">
          Take your notes conveniently wherever you are!
        </h1>
        <p className="header__text--description">
          Full authentication lorem ipsum there should be some text. I am
          designing and don't want to think about text. I am sorry okay.
        </p>
        <a href="/login" className="header__text--cta">
          Sign Up
        </a>
      </div>
      <img
        src="https://via.placeholder.com/500x350"
        alt="Large Custonote Logo"
        className="header__image"
      />
    </header>
  );
};

export default Header;
