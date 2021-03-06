import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homepage.component.jsx";
import ShopPage from "./Pages/Shop/shop.component.jsx";
import Header from './Components/Header/header.component.jsx';
import Login from './Pages/Login/login.component.jsx';
 
import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
