import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class Products extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div className="products-inner-container">
          <img className="logo-dark" src="./images/icon.png" alt=""/>
          <Fade>
            <div className="products-text-container">
              <h2>Наші особисті три стовпи нескінченності</h2>
              <p>Пам'ятайте, що ми - не інтернет-магазин. Якщо ви хочете придбати якісь із цих божественних товарів, то напишіть нам
              на <span> Batkovi_Carpi@gmail.com </span> та зробіть замовлення. Або напишіть нам свою поштову адресу в поле нижче,
              і ми зв'яжемося із вами як можна швидше</p>
              
              <div className="form-container">
                  <form className="form-inline" action="">
                    <input type="email" id="email" placeholder="Enter email" name="email"/>
                    <a className="submit-btn" href='/'>Добренько</a>
                  </form>
              </div>       
            </div>
          </Fade>

          <div className="cards-container">

            <Fade bottom>
              <div className="card">
                <img src="./images/wine2.jpg" alt=""/>
                <h3>Вино "Krow Lapkiv", 750мл</h3>
                <div className="product-details">
                  <h3>1500грн</h3>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="card">
                <img src="./images/img2.jpg" alt=""/>
                <h3>Батькові карпи</h3>
                <div className="product-details">
                  <h3>650грн / кг </h3>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="card">
                <img src="./images/shashlik1.jpg" alt=""/>
                <h3>Батьків Шашлик</h3>
                <div className="product-details">
                  <h3> 1050грн / кг</h3>
                </div>
              </div>
            </Fade>

          </div>    
        </div>
    )
  }
}
