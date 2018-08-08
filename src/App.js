import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from "./components/Home";
import CustomNavbar from "./components/CustomNavbar";
import Livematches from "./components/Livematches";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              {/*<Route path="/livematches" component={Livematches}/>-->*/}
              <Redirect to="/"/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
