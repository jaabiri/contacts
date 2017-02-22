import React from 'react';
import "./../App.css";

const List = (props) => {
    
    return (
        <div className="list" key={props.email}>
          <img src={props.image} role="presentation" /> 
          <div>
              <h5> {props.name} </h5>
              <h6>{props.phone}</h6>
            </div> 
          
        </div>
    );
};

export default List;