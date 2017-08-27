import React from 'react';
import "./../App.css";

const List = (props) => {
    let handlefav= function(id,e){
         props.handlfavoris(id,e)
    }
    return (
        <div className="list" key={props.email}>
          <img src={props.image} role="presentation" /> 
          <div className="donnee">
              <h5> {props.name} </h5>
              <h6>{props.phone}</h6>
         </div> 
          <i className="fa fa-star" aria-hidden="true"  className={this.isActive('')} onClick={(e)=>handlefav(props,e)}></i>
        </div>
    );
};

export default List;