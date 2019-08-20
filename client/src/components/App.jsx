import React from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Form from './Form.jsx';
import ContactUs from './ContactUs.jsx';
import Pricing from './Pricing.jsx';
import AddFund from './AddFund.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Apps = styled.div`
  text-align: center;
  font-family: Courier;
`

const App = () => {
  return (
      <Router >
        <Apps>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" component={Form} />
            <Route path="/addFund" component={AddFund} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contactus" component={ContactUs} />
          </Switch>
        </Apps>
      </Router>
  );
}
    
export default App;