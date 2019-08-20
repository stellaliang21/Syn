import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const InputForm = styled.form`
  border-style: solid;
  border-width: 3px;
  border-color: #4CAF50;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #f7f7f9;
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
`

const Inputs = styled.input`
  width: 350px;
  height: 25px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`

const Submit = styled.input`
  background-color: #4CAF50; 
  border: none;
  color: white;
  width: 180px;
  height: 25px;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
`

class AddFund extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      total_value: 0,
      user_id: '',
      node_id: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.addFund  = this.addFund.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    const { amount } = this.state;
    e.preventDefault();
    this.addFund(amount);  
  }

  addFund(value) {
    const { amount, total_value, user_id, node_id } = this.state;
    axios.post (`/api/addfund/${user_id}`, {
      node_id: node_id,
      amount: amount
    })
    .then(response => {
      this.setState({
        total_value: total_value + parseInt(value)
      });
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
      <h1>Add Fund</h1>
      <InputForm onSubmit={e => this.handleSubmit(e)}>
      <label>
            User ID:
            <Inputs type="text" name="user_id" onChange={this.handleChange} placeholder={'User ID'} />
        </label>
        <label>
            IB Account ID:
            <Inputs type="text" name="node_id" onChange={this.handleChange} placeholder={'IB Account ID'} />
        </label>
        <label>
            Amount:
            <Inputs type="text" name="amount" onChange={this.handleChange} placeholder={'Amount'} />
        </label>
        <Submit type="submit" value="Submit" />
      </InputForm> 
      {this.state.total_value}
    </div>
    )
  }
}

export default AddFund;