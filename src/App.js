import React, {useEffect}  from 'react';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {

  const [{user}, dispatch] = useStateValue();

  // piece of code which runs based on a given condition 
  // useEffect

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in ...
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user is logged out ...
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () =>{
      //Any cleanup operations goes in here 
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
