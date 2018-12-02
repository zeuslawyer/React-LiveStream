import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "redux";

import StreamsList from "./screens/StreamsList";
import StreamCreate from "./screens/StreamCreate";
import StreamDelete from "./screens/StreamDelete";
import StreamEdit from "./screens/StreamEdit";
import StreamShow from "./screens/StreamShow";

import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={StreamsList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
