import React from "react";
import List from "./list";
import "./../App.css";

const ContactsLists = props => {
  let filterobject = [];
  
  props.users && Object.keys(props.users).map(letter => {
    props.users[letter]
      .filter(item => item.name.indexOf(props.filter) !== -1)
      .map(obj => filterobject.push(obj));
  });

  return (
    <div className="main">
     
     {props.users &&   <ul>
        {props.filter.length <= 0
          ? Object.keys(props.users).map(letter => {
              return (
                <li  key={letter}>
                  <span className="letter"> {letter.toUpperCase()}</span>
                 
                  {props.users[letter].map(obj => (
                    <List
                      key={obj.email}
                      name={obj.name}
                      email={obj.email}
                      image={obj.thumbnail}
                      phone={obj.phone}
                      handlfavoris={props.handlfavoris}
                    />
                  ))}
                </li>
              );
            })
          : filterobject.map(obj => (
              <li key={obj.email}>
                <List
                  key={obj.email}
                  name={obj.name}
                  email={obj.email}
                  image={obj.thumbnail}
                  phone={obj.phone}
                  handlfavoris={props.handlfavoris}
                />
              </li>
            ))}
      </ul>}
    </div>
  );
};

export default ContactsLists;