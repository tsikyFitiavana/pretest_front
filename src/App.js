import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NewProduct from './components/newProducts/ajouterProd'
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import Menu from './components/Menu/meny';
import ListCard from './components/ListeCard/ListCard';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
            <Menu/>
                <Switch>  
                    <Route  path ="/newproduct" component={NewProduct}/>
                    <Route  path="/login" component={Login}/>
                    <Route  path ="/signup" component={Signup}/>
                    <Route  path ="/produits" component={ListCard}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
