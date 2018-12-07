import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import "redux";

import StreamsList from "./screens/StreamsList";
import StreamCreate from "./screens/StreamCreate";
import StreamDelete from "./screens/StreamDelete";
import StreamEdit from "./screens/StreamEdit";
import StreamShow from "./screens/StreamShow";
import browserHistory from "../history";

import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={browserHistory}>
          <div>
            <Header />

            <Route path="/" exact component={StreamsList} />
            <Route path="/streams" exact component={StreamsList} />

            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
