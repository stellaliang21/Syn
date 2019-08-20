import React from 'react';
import styled from 'styled-components';


const PricingInfo = styled.div`
  border-style: solid;
  border-width: 3px;
  border-color: #4CAF50;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const Pricing = () => {
  return (
    <PricingInfo> 
      <h1>Pricing</h1>
      <p>
        We charge $0 for banking fees 
        <br/>
        Savings account earns up to 1.5% 
        <br/>
        Interest rates are determined when you create an account
      </p>
    </PricingInfo>
  )
}

export default Pricing;

