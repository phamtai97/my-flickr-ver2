import React, {Component} from 'react';
import '../styles/App.css';
import Home from '../component/Home.js';
import Explore from '../component/Explore.js';
import Header from '../component/Header.js';
import Photo from '../component/Photo.js';
import Tag from '../component/Tag.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter, Switch} from 'react-router-dom';
import store from '../store/Store.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App" store={store}>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/explore" component={Explore}/>
            <Route exact path="/photos/tags/:id" component={Tag}/>
            <Route path="/photos/:id" component={Photo}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
