import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";

function HomePage() {
  return <div>This is the Home Page!</div>;
}
function Blog() {
  return <div>This is the Blog Page!</div>;
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Route path="/" exact component={HomePage} />
            <Route path="/blog" component={Blog} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
