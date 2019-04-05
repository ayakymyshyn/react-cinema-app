import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.scss";

const App = ({ count }) => {
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <div className="main-app">
      <div className="main-app__header">React Cinema App</div>
      <div className="main-app__content">content</div>
      <div className="main-app__footer">Footer</div>
    </div>
  );
};

const mapStateToProps = state => ({ count: state.count });

export default connect(mapStateToProps)(App);
