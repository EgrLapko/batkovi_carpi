import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { english, ukrainian } from '../../language';
import { ProductConsumer } from '../../context/context';

export default class Products extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const { eng, ukr } = value;
          return (
            <div className="products-inner-container">
              <img className="logo-dark" src="./images/icon.png" alt=""/>
              <Fade>
                <div className="products-text-container">
                  <h2> {eng ? english.orderTitle : ukrainian.orderTitle} </h2>
                  <p>{eng ? english.orderText : ukrainian.orderText}</p>
                  
                  <div className="form-container">
                      <form className="form-inline" action="">
                        <input type="email" id="email" placeholder="Enter email" name="email"/>
                        <a className="submit-btn" href='/'> {eng ? english.okButton : ukrainian.okButton} </a>
                      </form>
                  </div>       
                </div>
              </Fade>

              <div className="cards-container">

                <Fade bottom>
                  <div className="card">
                    <img src="https://i.imgur.com/PBpEYpL.jpg" alt=""/>
                    <h3>{eng ? english.prodKrowDesc : ukrainian.prodKrowDesc}</h3>
                    <div className="product-details">
                      <h3>{eng ? english.priceKrow : ukrainian.priceKrow}</h3>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div className="card">
                    <img src="https://i.imgur.com/Yo71hmt.jpg" alt=""/>
                    <h3>{eng ? english.prodCarpiDesc : ukrainian.prodCarpiDesc}</h3>
                    <div className="product-details">
                      <h3>{eng ? english.priceCarpi : ukrainian.priceCarpi}</h3>
                    </div>
                  </div>
                </Fade>

                <Fade bottom>
                  <div className="card">
                    <img src="https://i.imgur.com/KTlslNo.jpg" alt=""/>
                    <h3>{eng ? english.prodShashlikDesc : ukrainian.prodShashlikDesc}</h3>
                    <div className="product-details">
                      <h3>{eng ? english.priceShashlik : ukrainian.priceShashlik}</h3>
                    </div>
                  </div>
                </Fade>

              </div>    
            </div>
          )
        }}
      </ProductConsumer>
        
    )
  }
}
