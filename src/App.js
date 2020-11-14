import React from 'react';
import './App.css';

import { connect } from "react-redux";

import {
  GetUsers
} from "./redux/actions/taskAction";

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import MobileApp from './components/MobileApp';
import Products from './components/Products';
import CovidKit from './components/CovidKit';
import AccountSettings from './components/AccountSettings';
import BillingHistory from './components/BillingHistory';
import MyProfile from './components/MyProfile';
import Notifications from './components/Notifications';
import Security from './components/Security';
import Login from './components/Login';
import Signup from './components/signup/Signup';
import Main from './components/cart/Main';
import Account from './components/account/Account';
import OrderDetail from './components/account/OrderDetail';
import ForgetPassword from './components/ForgetPassword';
import UpdatePassword from './components/account/UpdatePassword';
import Faqs from './components/Faqs';
import HowItWork from './components/HowItWork';
import ProductDetail from './components/ProductDetail';

import { 
  BrowserRouter as Router, 
  Route,
  Switch   
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          
          {/* all components */} 
          <div className="main">
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/home' component={Home}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route exact path='/covidKit' component={CovidKit}></Route>
              <Route exact path='/mobileApp' component={MobileApp}></Route>
              <Route exact path='/products' component={Products}></Route>
              <Route exact path='/account-settings' component={AccountSettings}></Route>
              <Route exact path='/billing-history' component={BillingHistory}></Route>
              <Route exact path='/my-profile' component={MyProfile}></Route>
              <Route exact path='/notifications' component={Notifications}></Route>
              <Route exact path='/security' component={Security}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/signup' component={Signup}></Route>
              <Route exact path='/cart' component={Main}></Route>
              <Route exact path='/account' component={Account}></Route>
              <Route exact path='/order-detail' component={OrderDetail}></Route>
              <Route exact path='/forgetPassword' component={ForgetPassword}></Route>
              <Route exact path='/updatePassword' component={UpdatePassword}></Route>
              <Route exact path='/faqs' component={Faqs}></Route>
              <Route exact path='/howitwork' component={HowItWork}></Route>
              <Route exact path='/productDetail' component={ProductDetail}></Route>
            </Switch>
          </div>

        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  Loading: state.task.loading
});

const mapDispacthToProps = dispatch => {
  return {
    GetUsers: () => dispatch(GetUsers())    
  };
  
};
export default connect(
  mapStateToProps,
  mapDispacthToProps
)(App);
