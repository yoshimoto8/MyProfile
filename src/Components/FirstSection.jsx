import React, { Component } from 'react'
// import Image from '../images/kouki4.jpg'

class FirstSection extends Component {
  render() {
    return (
      <section className="about" id="about">
        <h2 className="heading">About Me</h2>
        <div className="content-wrapper">
          <div className="content-1">
            <div className="about-app-box">
              <img src="../src/images/kouki4.jpg" className="user-image" alt=""/>
              <div className="about-app-text">
              </div>
            </div>
          </div>

          <div className="content-2">
            <h2>自己紹介</h2>
            <p>
              はじめまして!! 吉本光輝(<a href="https://github.com/yoshimoto8">@yoshimoto8</a>)と申します。<br/>
              2016年からプログラミングを始め、某プログラミングスクールのAIメンターとして働いてました。<br/>
              その後、インターンなどでReact/Redux/Ruby on Railsを使ったプロダクト開発を経験。
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default FirstSection