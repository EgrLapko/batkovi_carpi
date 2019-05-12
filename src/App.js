import React from 'react';

import './style.css';
import Navbar from './components/Navbar/Navbar';
import Main from './Main';
import Footer from './components/Footer/Footer';
import ScrollTop from 'react-scrolltop-button';
import Sidebar from './components/Navbar/Sidebar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
          <ScrollTop 
            text="вгору"
            className="scroll-to-top"
            distance={300}
            style={{ 
              backgroundColor: "#2C2C2C",
              border: "1px solid rgba(255, 255, 255, .2)",
              borderRadius: "5px"
             }}
          />               
      <Main />       
      <Footer /> 
    </React.Fragment>                
  );
}

export default App;
