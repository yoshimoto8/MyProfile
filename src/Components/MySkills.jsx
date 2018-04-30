import React from 'react'
import { Element } from 'react-scroll'
import FaUser from 'react-icons/lib/fa/user'
import MdCreate from 'react-icons/lib/md/create'
import IoSocialGithub from 'react-icons/lib/io/social-github'

const MySkills = () => {
  return (
    <section className="skills">
      <Element name="test2" className="element"><h2 className="heading">My Skill</h2></Element>
      <div className="skills-wrapper">
        <div className="skills-box">
          <div className="title-box">
            <div className="skills-title">ティーチング</div>
            <div className="skills-title-english">teaching</div>
          </div>
          <FaUser className="img"/>
          <p className="skills-text">
            スクール時代100人以上の人にプロ<br/>
            グラミングを教えてきました。受講<br/>
            生は何を悩んでいるかをヒヤリング<br/>
            して聞き出す能力が身についてます。
          </p>
        </div>

        <div className="skills-box">
          <div className="title-box">
            <div className="skills-title">デザイン</div>
            <div className="skills-title-english">design</div>
          </div>
          <MdCreate className="img" />
          <p className="skills-text">
            HTML/CSS/SASSやSketchを<br/>
            使ったアプリケーション作成が可能。<br/>
            今後一番身に付けたいスキルでもあり<br/>
            ます。
          </p>
        </div>

        <div className="skills-box">
          <div className="title-box">
            <div className="skills-title">コーディング</div>
            <div className="skills-title-english">coading</div>
          </div>
          <IoSocialGithub className="img" />
          <p className="skills-text">
            Rails/React/Reduxを<br/>
            使ったSPAを作ることが得意です。<br/>
          </p>
        </div>

      </div>
    </section>
  )
}

export default MySkills