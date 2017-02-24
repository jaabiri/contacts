import React, { Component } from "react";
import "./LoadingHOC.css";

const isEmpty = prop =>
  prop === null ||
    prop === undefined ||
    prop.hasOwnProperty("length") && prop.length === 0 ||
    prop.constructor === Object && Object.keys(prop).length === 0;

const Load = WrappedComponent => {
  return class componentName extends Component {
    componentDidMount() {
      this.startTimer = Date.now();
    }

    componentWillUpdate(nextProps) {
      if (!isEmpty(this.props.users)) {
        this.endTimer = Date.now();
      }
    }

    render() {
      const myProps = {
        loadingTime: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
      };
      return isEmpty(this.props.users)
        ? <div className="loader" />
        : <WrappedComponent {...this.props} {...myProps} />;
    }
  };
};

export default Load;
