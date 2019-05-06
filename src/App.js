import React from 'react';

import './style.css';
import Navbar from './components/Navbar/Navbar';
import Main from './Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <section>          
          <Navbar />       
          <Main />       
          <Footer /> 
      </section>
    </div>
  );
}

export default App;
