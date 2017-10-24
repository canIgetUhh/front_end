import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BaseLayout from './components/BaseLayout';
import UserLogin from './components/UserLogin';
import UserSignUp from './components/UserSignUp';
import DrinkMenu from './components/DrinkMenu';
import DrinkCart from './components/DrinkCart';
import ChoosePath from './components/ChoosePath';
import BarLogin from './components/BarLogin';
import BarSignup from './components/BarSignup';
import BarAllOrders from './components/BarAllOrders';
import BarComplete from './components/BarComplete';
import OrderPending from './components/OrderPending';
import OrderComplete from './components/OrderComplete';
import {CookiesProvider} from 'react-cookie';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';








ReactDOM.render(

  <BrowserRouter>
  <CookiesProvider>
  <BaseLayout>
  <Switch>
  <Route path ='/ordercomplete' component = {OrderComplete} />
  <Route path ='/barcomplete' component = {BarComplete} />
  <Route path ='/barallorders' component = {BarAllOrders} />
  <Route path ='/barsignup' component = {BarSignup} />
  <Route path ='/barlogin' component = {BarLogin} />
  <Route path ='/usersignup' component = {UserSignUp} />
  <Route path ='/drinkmenu' component = {DrinkMenu} />
  <Route path ='/drinkcart' component = {DrinkCart} />
  <Route path ='/userlogin' component = {UserLogin} />
  <Route path ='/orderpending' component = {OrderPending} />
  <Route path ='/' component = {ChoosePath} />
  </Switch>
  </BaseLayout>
  </CookiesProvider>
  </BrowserRouter>
  , document.getElementById('root'));
  registerServiceWorker();
