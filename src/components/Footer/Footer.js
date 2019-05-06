import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="social-medias">
          <li><i className="fab fa-facebook"></i></li>
          <li><i className="fab fa-instagram"></i></li>
          <li><i className="fab fa-twitter-square"></i></li>
        </ul>
        <div className="bottom-textbox">
          <p>© 2019. Made by Yehor Lapko </p>
        </div>
      </div>
    )
  }
}
