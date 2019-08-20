import React from 'react';
import styled from 'styled-components';

const HomeInfo = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: #4CAF50;
  width: 750px;
  margin-left: auto;
  margin-right: auto;
`

const Home = () => {
  return (
    <HomeInfo> 
      <h1>SynBank</h1>
      <h2>Banking made easy</h2>
      <h3>Create a savings account that will allow you to accure interest</h3>
      <h4>Come join us today!</h4>
    </HomeInfo>
  )
}

export default Home;