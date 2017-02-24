import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './test.css';

class Fcc extends Component {
    state={
         note:0
    }
/*  componentDidMount() {
    this.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
   this.removeEventListener('click', this.handleClick);
  }*/
    handleClick(){
         this.setState({
              note:this.state.note+1
         })
         console.log(this.state.note)
    }
    render() {
        return (
            <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
           <div  onClick ={this.handleClick.bind(this)}>
                  {this.props.children(this.state.note)}
            </div>
        </ReactCSSTransitionGroup>
           
        );
    }
}

export default Fcc;