import React from "react";
import ReactDOM from "react-dom";
import Header from './Components/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />,
     document.getElementById("app"));
