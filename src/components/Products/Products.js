import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { english, ukrainian } from '../../language';
import { ProductConsumer } from '../../context/context';
import LogoDark from '../LogoDark';
import Title from '../Title';
import ProductCard from './ProductCard';

export const Products = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  return (
    <ProductConsumer>
        {value => {
          const { eng } = value;
          return (
            <div className="products">
              <LogoDark />
              <Fade>
                <div className="products__order-container">
                  <h2 className="title">
                    {eng ? english.orderTitle : ukrainian.orderTitle}
                  </h2>
                  <p className="text">{eng ? english.orderText : ukrainian.orderText}</p>
                  <div className="form-container">
                      <form className="form-inline" action="">
                        <input type="email" id="email" placeholder="Enter your email" name="email"/>
                        <button className="btn"> {eng ? english.okButton : ukrainian.okButton} </button>
                      </form>
                  </div>       
                </div>
              </Fade>

              <div className="cards-container">

                <Fade bottom>
                  <ProductCard 
                    img="https://i.imgur.com/PBpEYpL.jpg"
                    title={eng ? english.prodKrowDesc : ukrainian.prodKrowDesc}
                    price={eng ? english.priceKrow : ukrainian.priceKrow}
                  />
                </Fade>

                <Fade bottom>
                  <ProductCard 
                    img="https://i.imgur.com/Yo71hmt.jpg"
                    title={eng ? english.prodCarpiDesc : ukrainian.prodCarpiDesc}
                    price={eng ? english.priceCarpi : ukrainian.priceCarpi}
                  />
                </Fade>

                <Fade bottom>
                  <ProductCard 
                    img="https://i.imgur.com/KTlslNo.jpg"
                    title={eng ? english.prodShashlikDesc : ukrainian.prodShashlikDesc}
                    price={eng ? english.priceShashlik : ukrainian.priceShashlik}
                  />
                </Fade> 

              </div>    
            </div>
          )
        }}
      </ProductConsumer>
  )
}

export default Products;