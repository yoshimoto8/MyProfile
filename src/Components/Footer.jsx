import React, { Component } from 'react'

class Footer extends Component{
  render() {
    return(
      <footer className="footer">
        <div className="sns-logo">
          <a href="https://twitter.com/"><img src="../src/images/twiiter.png" height="50" width="50"/></a>
          <a href="https://github.com/yoshimoto8"><img src="../src/images/github.png" height="50" width="50" /></a>
        </div>
        <font className="copyright" color="white">Copyright © yoshimoto's Portfolio 2018</font>
      </footer>
    )
  }
}

export default Footer