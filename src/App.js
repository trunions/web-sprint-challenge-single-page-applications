import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from './Home'
import Form from './Form'

const App = () => {
  return (
    <div className="header">
      <h1>Lambda Eats</h1>
      <p>Your favorrite food, delivered while you code!!</p>
      <nav>
        
        
      <Link to="/"><button>Home</button></Link>
      <Link to="/pizza"><button id="order-pizza">Order Pizza!</button></Link>
       
      </nav>
  <Switch>
      <Route path="/pizza" component={Form} />
      <Route path="/" component={Home} />
  </Switch>
    </div>
  );
};
export default App;
