import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Client from "./pages/Client";
import Board from "./pages/Board";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {
  state = {
    user:{}
  }

// <>
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            
          </Wrapper>
          <Footer />
        </div>
      </Router>
    )
}
// When there is no state you do not need to extend a class
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
}
export default App;
