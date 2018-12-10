import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
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

            <Route path="/" exact component={StreamsList} />
            <Route path="/streams" exact component={StreamsList} />

            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" component={StreamDelete} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
