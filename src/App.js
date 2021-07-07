import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from '../src/views/home'
import Detail from '../src/views/detail'
import MenuBar from '../src/components/menuBar'

function App() {
  return (
    <div>
      <MenuBar />
      <Router>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path='/artist/:id' component={Detail} />
            <Redirect to="/" />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
