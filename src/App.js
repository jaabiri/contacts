import React, { Component } from "react";
import Contacts from "./components/ContactsApp";
import logo from "./logo.svg";
import "./App.css";

const api = "https://randomuser.me/api/?results=50&nat=gb";

class App extends Component {
  state = {
    users: {}
  };
  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(parsedResponse => parsedResponse.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail,
        phone:user.phone
      })))
      .then(arrnotri => {
        return arrnotri
          .sort(function(a, b) {
            return a.name.localeCompare(b.name);
          })
          .reduce(
            (acc, val) => {
              if (!acc[val.name[0]]) {
                acc[val.name[0]] = [val];
              } else {
                acc[val.name[0]].push(val);
              }
              return acc;
            },
            {}
          );
      })
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Contacts users={this.state.users} />
      </div>
    );
  }
}

export default App;
