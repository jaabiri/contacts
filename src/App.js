import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Contacts from "./components/ContactsApp";
import logo from "./logo.svg";
import "./App.css";

const api = "https://randomuser.me/api/?results=50&nat=gb";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Contacts />
      </div>
    </Provider>  
    );
  }
}

export default App;
