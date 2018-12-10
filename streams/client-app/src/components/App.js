import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "redux";
import browserHistory from "../history";

import StreamsList from "./streamViews/StreamsList";
import StreamCreate from "./streamViews/StreamCreate";
import StreamDelete from "./streamViews/StreamDelete";
import StreamEdit from "./streamViews/StreamEdit";
import StreamShow from "./streamViews/StreamShow";

import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={browserHistory}>
          <div>
            <Header />

            <Switch>
              <Route path="/" exact component={StreamsList} />
              <Route path="/streams" exact component={StreamsList} />

              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route
                path="/streams/delete/:id"
                exact
                component={StreamDelete}
              />
              <Route path="/streams/:id" exact component={StreamShow} />
            </Switch>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
