import React from "react";
import ReactDOM from "react-dom";
import Header from './Components/Header'
import FirstSection from './Components/FirstSection'
import SecondSection from './Components/SecondSection'
import ThirdSection from './Components/ThirdSection'
import Footer from './Components/Footer'

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />,
     document.getElementById("app"));
