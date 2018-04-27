import React, { Component } from 'React'
import Slider from "react-slick";
import Modal from 'react-modal';
import { Element } from 'react-scroll'

class ThirdSection extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.handleChangeModal = this.handleChangeModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleChangeModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
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
            <img className="milmil-img" src="../src/images/mil.jpeg" alt="" onClick={this.handleChangeModal}/>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <div className="modal-content-1" style={{display: "flex"}}>
          <img src="../src/images/mil.jpeg" height="300px" width="500px"/>
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
      </section>
    )
  }
}

export default ThirdSection