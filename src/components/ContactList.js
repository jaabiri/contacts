import React from 'react';

const ContactsLists = (props) => {
     console.log(props.users)
    return (
        <div>
             <h1>{props.filter}</h1>
            <ul>
          {props.users.map(user=><li key={user.name}>
              
             <img src={user.thumbnail}/> {user.name}</li>)}    
        </ul>
        </div>
      
    )
};

export default ContactsLists;