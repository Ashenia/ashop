import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//import Page components
import HomePage from "../src/components/directory/directory.components";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
