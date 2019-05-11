import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class AboutUs extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="about-main-container">
        <img className="logo-dark" src="./images/icon.png" alt=""/>
        <Fade>
          <div className="about-text-container">
            <h2>Хто така родина Лапків?</h2>
            <p> Джерела історії родини Лапко починається з далеких часів зачатку трипільської культури, але
            якась конкретна інформація, що стосувалася б коріння цієї родини, на жаль, до наших часів не дійшла.
            Зараз родина Лапко - це не просто дружня, велика родина, але й цілий бренд, знак якості, приклад, який
            варто наслідувати і досвід, який варто переймати. Філософія родини лежить на трьох стовпах своєї величі - 
            смажених карпах, шашликах, та червоному вині. І якщо ми кажемо про створення цих трьох складових, то родина
            Лапко - справжній приклад того, як просте бажання стає справжнім прикладом майстерності ремесла.
            </p>
          </div>  
        </Fade> 
        <div className="about-pictures-container">

          <Fade bottom>
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam1.jpg)"}}>
              <h4>Олександр Лапко</h4>
              </div>
              <div className="back-side">
                <h3>Голова родини</h3>
                <p>Голова родини та головний винахідних трьох стовпів, на яких тримається людство - 
                смажених карпів, шашликів, та червоного вина. Майстер на всі руки, досвідчений кулінар,
                улюбленим батько. Філантроп.
                </p>
              </div>
            </div>
          </Fade>

          <Fade bottom>          
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam2.jpg)"}}>
              <h4>Олена Лапко</h4>
              </div>
              <div className="back-side">
                <h3>Шия родини</h3>
                <p> Дружина Олександра. Майстер тонкого сарказму та жорсткої іронії. Краща танцюристка
                break-dance в Україні, перший та головний дегустатор вина в світі. Єдина муза Олександра, улюблена,
                але не дуже класична, мати, а також першокласний кухар.
                </p>
              </div>
            </div>
          </Fade>     

          <Fade bottom> 
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam3.jpg)"}}>
              <h4>Єгор Лапко</h4>
              </div>
              <div className="back-side">
                <h3>Старший син</h3>
                <p>Дійсно старший. Найперший з дітей, хто побачив білий світ. І не забувайте.</p>
              </div>
            </div>
          </Fade>

          <Fade bottom>                                   
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam4.jpg)"}}>
              <h4>Анастасія Лапко</h4>
              </div>
              <div className="back-side">
                <h3>Старша Донька</h3>
                <p>Та, що виштовхнула брата в світ, а сама вирішила подумати, чи варто воно того. Вирішила, що варто.
                Поліглот, космополіт, любляча мати.</p>
              </div>
            </div>
          </Fade>    

          <Fade bottom> 
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam5.jpg)"}}>
              <h4>Степан Лапко</h4>
              </div>
              <div className="back-side">
                <h3>Молодший син</h3>
                <p>Так, молодший. Бо Єгор - старший.</p>
              </div>
            </div>
          </Fade> 

          <Fade bottom>           
            <div className="flip-card">
              <div className="front-side" style={{backgroundImage:"url(images/family/fam6.jpg)"}}>
              <h4>Мар'я Лапко</h4>
              </div>
              <div className="back-side">
                <h3>Молодша донька</h3>
                <p>Дійсно молодша і дійсно донька</p>
              </div>
            </div>
          </Fade>                 
                
        </div>  
      </div>
    )
  }
}
