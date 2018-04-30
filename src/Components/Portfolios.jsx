import React, { Component } from 'React'
import Modal from 'react-modal';
import { Element } from 'react-scroll'
import MilImage from '../images/mil.jpeg'
import ProfileImage from '../images/profile.jpeg'
import ShowModal from '../Molecules/ShowModal'

class Portfolios extends Component {
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
          <div className="portfolio-img-box">
            <img className="portfolio-img" src={MilImage} alt="" onClick={this.handleChangeModal}/>
            <img className="portfolio-img" src={ProfileImage} alt="" onClick={this.handlePortfolioModalIsOpen}/>
          </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ShowModal
            profileImage={MilImage}
            title="MiLMiL"
            period="20日"
            detailUrl="https://qiita.com/yoshimo123/items/e9929c7c914b8ef7981a"
            githubUrl="https://github.com/yoshimoto8/tweetCodenateApp"
            text="誰でも簡単にアプリ内でコーディネートができるSNS形式のwebサービスを開発しました。 <br/>
                  UXを追求するためにBackEndをRuby on Rails, FrontEndをReactを使いSPAで開発しています。"
            closeModal={this.closeModal}
          />
        </Modal>

        <Modal
          isOpen={this.state.portfolioModalIsOpen}
          onRequestClose={this.closePortfolioModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ShowModal
            profileImage={ProfileImage}
            title="Portfolio"
            period="1日"
            detailUrl="https://yoshimoto8.github.io/MyProfile/"
            githubUrl="https://github.com/yoshimoto8/MyProfile"
            text="自分のことを簡単に知ってもらうためにReact/HTML/SASSを使用し作成しました。"
            closeModal={this.closePortfolioModal}
          />
        </Modal>
      </section>
    )
  }
}

export default Portfolios