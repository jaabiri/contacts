import React, { Component } from "react";
import Contacts from "./components/ContactsApp";
import logo from "./logo.svg";
import "./App.css";

const api = "https://randomuser.me/api/?results=50&nat=gb";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail
      })))
      .then(arrnotri => {
        return arrnotri.sort(function(a, b) {
          return a.name.localeCompare(b.name);
        });
      })
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contacts users={this.state.users} />
      </div>
    );
  }
}

export default App;
