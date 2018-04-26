import React from "react";
import ReactDOM from "react-dom";
import Header from './Components/Header'
import FirstSection from './Components/FirstSection'

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <FirstSection />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />,
     document.getElementById("app"));
