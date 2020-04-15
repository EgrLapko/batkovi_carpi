import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';

import { english, ukrainian } from '../../language';
import LogoDark from '../LogoDark';
import ProductCard from './ProductCard';

export const Products = ({ langENG }) => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])

  return (
      <div className="products">
        <LogoDark />
        <Fade>
          <div className="products__order-container">
            <h2 className="title">
              {langENG ? english.orderTitle : ukrainian.orderTitle}
            </h2>
            <p className="text">{langENG ? english.orderText : ukrainian.orderText}</p>
            <div className="form-container">
                <form className="form-inline" action="">
                  <input type="email" id="email" placeholder="Enter your email" name="email"/>
                  <button className="btn"> {langENG ? english.okButton : ukrainian.okButton} </button>
                </form>
            </div>       
          </div>
        </Fade>

        <div className="cards-container">

          <Fade bottom>
            <ProductCard 
              img="https://i.imgur.com/PBpEYpL.jpg"
              title={langENG ? english.prodKrowDesc : ukrainian.prodKrowDesc}
              price={langENG ? english.priceKrow : ukrainian.priceKrow}
            />
          </Fade>

          <Fade bottom>
            <ProductCard 
              img="https://i.imgur.com/Yo71hmt.jpg"
              title={langENG ? english.prodCarpiDesc : ukrainian.prodCarpiDesc}
              price={langENG ? english.priceCarpi : ukrainian.priceCarpi}
            />
          </Fade>

          <Fade bottom>
            <ProductCard 
              img="https://i.imgur.com/KTlslNo.jpg"
              title={langENG ? english.prodShashlikDesc : ukrainian.prodShashlikDesc}
              price={langENG ? english.priceShashlik : ukrainian.priceShashlik}
            />
          </Fade> 

        </div>    
      </div>
  )
}

const mapStateToProps = (state) => ({
  langENG: state.app.eng
})

export default connect(mapStateToProps)(Products);