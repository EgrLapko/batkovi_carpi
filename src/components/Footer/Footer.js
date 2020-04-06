import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer__socials">
          <li className="social"><i className="fab fa-facebook"></i></li>
          <li className="social"><i className="fab fa-instagram"></i></li>
          <li className="social"><i className="fab fa-twitter-square"></i></li>
        </ul>
        <p className="footer__text">© 2019. Made by Yehor Lapko </p>
      </div>
    )
  }
}
