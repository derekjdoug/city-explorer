import React from 'react';
import './App.css';
import Header from './Header';
import CityForm from './CityForm';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <CityForm />
        <Footer />
      </div>
    );
  }
}

export default App;
