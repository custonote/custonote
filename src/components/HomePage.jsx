import React from 'react';
import Feature from './Feature';
import Header from './Header';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Features</h2>
        <section className="features">
          <Feature />
          <Feature />
          <Feature />
        </section>
      </div>
    );
  }
}

export default HomePage;
