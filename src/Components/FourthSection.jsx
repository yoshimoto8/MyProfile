import React, { Component } from 'react'
import { Element } from 'react-scroll'
import KagawaImage from '../images/kagawa.jpeg'
import SchoolImage from '../images/school.jpeg'
import DavaoImage from '../images/davao.jpeg'
import DiveImage from '../images/dive.jpeg'

class FourthSection extends Component {
  render() {
    return(
      <section className="story">
        <Element name="test4" className="element"><h2 className="heading">Story</h2></Element>
        <div className="story-wrapper">
          <div className="story-box">
            <h2>1995〜</h2>
            <img className="story-image" src={KagawaImage}/>
            <p className="story-text">
              四国の中でも都会である高松で生まれる。<br/>
              幼稚園頃の記憶はないが、小学生からWindows<br/>
              のノートパソコンを買って頂いき、ネトゲ廃人に<br/>
              なってた記憶がある。
            </p>
          </div>
          <div className="story-box">
            <h2>2011〜</h2>
            <img className="story-image" src={SchoolImage}/>
            <p className="story-text">
              そして宗教高校時代へ突入。<br/>
              なんだかんだ続けてきたバドミントン。<br/>
              朝6時から朝練、そして夜10時までの毎日に耐え<br/>
              インターハイへ出場を果たす。
              <br/>
              <br/>
              青春時代は全て部活動へ捧げ燃え尽きた。
            </p>
          </div>
          <div className="story-box">
            <h2>2014〜</h2>
            <img className="story-image" src={DavaoImage}/>
            <p className="story-text">
              デザインだ！海外だ！と言いながら留学を決意。<br/>
              コンビニで100万貯金しフィリピンへ、帰国後<br/>
              お金がないことに気づき断念。<br/>
              <br/>
              その後上京し、某眼鏡屋で働いた。
            </p>
          </div>
          <div className="story-box">
            <h2>2017〜</h2>
            <img className="story-image" src={DiveImage}/>
            <p className="story-text">
              独学でプログラミングを学び、某プログラミング<br/>
              スクールでメンターを務めた。<br/>
              <br/>
              数学やPythonやアルゴリズムを脳汁を垂らしながら<br/>
              教えていた記憶が今でも残っている。
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default FourthSection