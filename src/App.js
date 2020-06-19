import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.css';

import {Detail} from './pages/Detail.js'
import {Home} from './pages/Home.js'
import {NotFound} from './pages/NotFound.js'

class App extends Component {
    
render(){

    return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
      </Switch>
    </div>
  );
}
}

export default App;
