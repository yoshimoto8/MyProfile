import React from "react";
import ReactDOM from "react-dom";
import Header from './Components/Header'
import SelfIntro from './Components/SelfIntro'
import MySkills from './Components/MySkills'
import Portfolios from './Components/Portfolios'
import Footer from './Components/Footer'
import Story from './Components/Story'

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <SelfIntro />
        <MySkills />
        <Story />
        <Portfolios />
        <Footer />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />,
     document.getElementById("app"));
