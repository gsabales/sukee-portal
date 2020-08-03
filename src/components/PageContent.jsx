import React from "react";
import Homepage from "./Homepage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserCart from "./UserCart";


const PageContent = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage}/>
        </Switch>
      </Router>
    </>
  );
};

export default PageContent