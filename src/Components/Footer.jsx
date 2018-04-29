import React, { Component } from 'react'
import TwitterImage from '../images/twiiter.png'
import GithubImage from '../images/github.png'

class Footer extends Component{
  render() {
    return(
      <footer className="footer">
        <div className="sns-logo">
          <a href="https://twitter.com/"><img src={TwitterImage} height="50" width="50"/></a>
          <a href="https://github.com/yoshimoto8"><img src={GithubImage} height="50" width="50" /></a>
        </div>
        <font className="copyright" color="white">Copyright © yoshimoto's Portfolio 2018</font>
      </footer>
    )
  }
}

export default Footer