import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Login from './component/Login';
import Payment from './component/Payment';
import Orders from './component/Orders';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase"
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51IhxU1FfZ1TwAI8ZlZ8kXVp1F1TUVVfiNO0tIOHqMNf6n5T95hKtaKMfkTP0uH9eg30W2CmW6R937AnbYetZFExd00qL9HIWza'
  );

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log("The User Is >>", authUser)
      if (authUser){
        dispatch({
          type:'SET-USER',
          user: authUser
        })

      }else {
        dispatch({
          type:'SET-USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
