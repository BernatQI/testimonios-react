import React from 'react';
import './App.css';
import Testimonio from './components/Testimonio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='main-container'>
          <h1>This are our customers testimonios</h1>
          <Testimonio
            name='BernatQi'
            country='Girona, Spain'
            image='bernatqi'
            alt='BernatQi'
            job='SEO & Developer'
            company='Comercial Serviplast'
            testimonio='I love Software & Digital Marketing (mostly SEO). I am currently studing Programming & Software Design by Dr. Luis Fernandez Muñoz & '
            freeCodeCamp='learning by freeCodeCamp'
            testimonio2='.' />
          <Testimonio
            name='Random Two'
            country='Australia'
            image='random2'
            alt='Random Two'
            job='Developer'
            company='DeviAmazing'
            freeCodeCamp='I have learned by FreeCodeCamp'
            testimonio2=' and nowadays I am software developer in the morning and fluff hunter in the night. But sometimes I hunt code and program fluff.' />
          <Testimonio
            name='Random One'
            country='Norway'
            image='random1'
            alt='Random One'
            job='Developer'
            company='NorTech'
            testimonio='I am software developer in the morning and fluff hunter in the night. Sometimes I hunt code and program fluff, but '
            freeCodeCamp='always learn by freeCodeCamp'
            testimonio2='.' />
        </div>
      </div>
    );
  }
}

export default App;
