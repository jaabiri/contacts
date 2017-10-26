import React, {Component} from 'react';
import SearchBar from "./SearchBar"
import { connect } from "react-redux";
import {handleUser} from '../actions/actionsCreator'
import ContactList from "./ContactList"
import LoadingHOC from './HOC/Load'

import "./../App.css";
class Contacts extends Component {

   state={
      filter:"" 
   }
   componentDidMount() {
    this.props.fetchUsers()
    
  }
  handleChange(e){
      console.log(e.target.value)
          this.setState({
               filter:e.target.value
          })
  }

    render() {
        console.log('this.props', this.props)
        return (
            <div>
                 
                 <SearchBar change={this.handleChange.bind(this)} />
                 <ContactList users={this.props.users} filter={this.state.filter} handlfavoris={this.props.handlfavoris}/>
                 <h1>{this.props.loadingTime}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
     console.log(state);
     return {
          users: state.Users
     }
}
const mapDispatchToProps = (dispatch)=>{
     return {
          fetchUsers: ()=>dispatch(handleUser())
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);