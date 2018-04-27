import React from 'react'
import { Element } from 'react-scroll'

const SecondSection = () => {
  return (
    <section className="skills">
      <Element name="test2" className="element"><h2 className="heading">My Skill</h2></Element>
      <div className="skills-wrapper">
        <div className="skills-box">
          <img src="../src/images/html-5.svg"/>
          <div className="skills-title">HTML/CSS/SCSS</div>
          <p className="skills-text">
            自分の持っている服や欲しい服を <br/>
            登録して自由にコーディネートする <br/>
            が可能です。
          </p>
        </div>

        <div className="skills-box">
          <img src="../src/images/javascript.svg"/>
          <div className="skills-title">Javascript/React</div>
          <p className="skills-text">
            コーディネートしたTweetを　<br/>
            みんなに知ってもらっていいねのか <br/>
            悪いのか評価してもらおう！
          </p>
        </div>

        <div className="skills-box">
          <img src="../src/images/ruby.svg"/>
          <div className="skills-title">Ruby/Ruby on Rails</div>
          <p className="skills-text">
            フォロワーや他の人に評価してもらった <br/>
            Tweetをグラフで見て人気なのかを　<br/>
            確かめよう
          </p>
        </div>

      </div>
    </section>
  )
}

export default SecondSection