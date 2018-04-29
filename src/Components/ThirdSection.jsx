import React, { Component } from 'React'
import Slider from "react-slick";
import Modal from 'react-modal';
import { Element } from 'react-scroll'
import MilImage from '../images/mil.jpeg'
import ProfileImage from '../images/profile.jpeg'

class ThirdSection extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      portfolioModalIsOpen: false
    };
    this.handleChangeModal = this.handleChangeModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handlePortfolioModalIsOpen = this.handlePortfolioModalIsOpen.bind(this);
    this.closePortfolioModal = this.closePortfolioModal.bind(this)
  }

  handleChangeModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  handlePortfolioModalIsOpen() {
    this.setState({portfolioModalIsOpen: true})
  }

  closePortfolioModal(){
    this.setState({portfolioModalIsOpen: false})
  }

  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return(
      <section className="portfolio">
        <Element name="test3" className="element"><h2 className="heading">Portfolio</h2></Element>
        <Slider {...settings}>
          <div>
            <img className="portfolio-img" src={MilImage} alt="" onClick={this.handleChangeModal}/>
          </div>
          <div>
            <img className="portfolio-img" src={ProfileImage} alt="" onClick={this.handlePortfolioModalIsOpen}/>
          </div>
        </Slider>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div className="modal-content-1" style={{display: "flex"}}>
          <img src={MilImage} height="300px" width="500px"/>
          <div style={{margin: 20}}>
            <h2>アプリ名： MiLMiL</h2>
            <h2>開発期間: ２０日</h2>
            <h2>詳細: <a href="https://qiita.com/yoshimo123/items/e9929c7c914b8ef7981a">https://qiita.com/yoshimo123/items/e9929c7c914b8ef7981a</a></h2>
            <h2>Github: <a href="https://github.com/yoshimoto8/tweetCodenateApp">https://github.com/yoshimoto8/tweetCodenateApp</a></h2>
            <font size="3">
              誰でも簡単にアプリ内でコーディネートができるSNS形式のwebサービスを開発しました。 <br/>
              UXを追求するためにBackEndをRuby on Rails, FrontEndをReactを使いSPAで開発しています。
            </font>
          </div>
        </div>
        <div style={{float: "right"}}>
        <button onClick={this.closeModal}>close</button>
        </div>
        </Modal>

        <Modal
          isOpen={this.state.portfolioModalIsOpen}
          onRequestClose={this.closePortfolioModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-content-1" style={{display: "flex"}}>
            <img src={ProfileImage} height="300px" width="500px"/>
            <div style={{margin: 20}}>
              <h2>Portfolio</h2>
              <h2>開発期間: 1日</h2>
              <h2>詳細: <a href="https://yoshimoto8.github.io/MyProfile/">https://yoshimoto8.github.io/MyProfile/</a></h2>
              <h2>Github: <a href="https://github.com/yoshimoto8/MyProfile">https://github.com/yoshimoto8/MyProfile</a></h2>
              <font size="3">
                自分のことを簡単に知ってもらうためにReact/HTML/SASSを使用し作成しました。
              </font>
            </div>
          </div>
          <div style={{float: "right"}}>
          <button onClick={this.closePortfolioModal}>close</button>
          </div>
        </Modal>
      </section>
    )
  }
}

export default ThirdSection