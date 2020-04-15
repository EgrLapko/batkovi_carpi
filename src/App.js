import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import Navbar from './components/Navbar/Navbar';
import Main from './Main';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Navbar/Sidebar'; 

export const App = ( { langENG } ) => {

  let engFont = {fontFamily: "'Cinzel', serif"};
  let ukrFont = {fontFamily: "'Cormorant Unicase', serif"}

  return (
    <div className="whole-wrapper" style = {langENG ? engFont : ukrFont}>
      <Navbar />
      <Sidebar />            
      <Main />       
      <Footer /> 
    </div>    
  )
}

const mapStateToProps = state => {
  return {
    langENG: state.app.eng,
  }
}
export default connect(mapStateToProps)(App)
