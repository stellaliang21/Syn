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
  width: 338px;
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

const Button = styled.button`
  background-color: #4CAF50; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

class Form extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      legal_names: '',
      email: '',
      phone_numbers: '',
      id: '',
      refresh_token: '',
      user_created: false,
      ib_account_created: false,
      nickname: '',
      node_id: '',
      withdrawals_remaining: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitCreateUser = this.handleSubmitCreateUser.bind(this);
    this.createIBAccount = this.createIBAccount.bind(this);
    this.createUser = this.createUser.bind(this);
    this.oauth = this.oauth.bind(this);
    this.createIBAccount = this.createIBAccount.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  createUser() {
    const { legal_names, email, phone_numbers, user_created } = this.state;

    axios.post ('/api/user', {
      legal_names: legal_names,
      email: email,
      phone_numbers: phone_numbers
    })
    .then(response => {
      this.setState({
        id: response.data.id,
        refresh_token: response.data.body.refresh_token,
        user_created: !user_created

      });
    })
    .catch(error => {
      console.log(error)
    });
  }

  oauth() {
    const { id, refresh_token } = this.state;

    axios.get (`/api/oauth/${id}/${refresh_token}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  createIBAccount() {
    const { id, nickname, ib_account_created } = this.state;

    axios.post (`/api/user/${id}`, {
      nickname: nickname
    })
    .then(response => {
      this.setState({
        node_id: response.data.nodes[0]._id,
        ib_account_created: !ib_account_created
      });
    })
    .catch(error => {
      console.log(error)
    });
  }

  handleSubmitCreateUser(e) {
    e.preventDefault();
    this.createUser();
  }

  handleSubmitIBAccount(e) {
    e.preventDefault();
    this.createIBAccount();
  }
  
  render() {
    const { user_created, ib_account_created }  = this.state;

    let accountDetail;

    if (user_created === false) {
      accountDetail = 
        <div>
          <InputForm onSubmit={e => this.handleSubmitCreateUser(e)}>
            <label>
              Full Name:
              <Inputs type="text" name="legal_names" onChange={this.handleChange} placeholder={'Full Name'} />
            </label>
            <label>
              Email:
              <Inputs type="text" name="email" onChange={this.handleChange} placeholder={'Email'} />
            </label>
            <label>
              Phone Number:
              <Inputs type="text" name="phone_numbers" onChange={this.handleChange} placeholder={'Phone Number'} />
            </label>
            <Submit type="submit" value="Submit" />
          </InputForm>
        </div>
    } else if ( ib_account_created === true && user_created === true) {
      accountDetail =
      <InputForm>
        <div>Account Created! Please use this information to add funds to your account! </div>
        <div>
          User ID: {this.state.id}
        </div>
        <div>
          IB Account ID: {this.state.node_id}
        </div>
      </InputForm>
    } else if (user_created === true) {
      accountDetail = 
        <div>

          <InputForm>
            <div>
              congratulations on creating an user account!
            </div>
            <div>
              Please fill in the information to create an IB Account
            </div>
            <form onSubmit={e => this.handleSubmitIBAccount(e)}>
              <label>
                  nickname:
                  <Inputs type="text" name="nickname" onChange={this.handleChange} placeholder={'nickname'} />
              </label>
              <Submit type="submit" value="Submit" />
            </form>
          </InputForm>  
          <Button onClick={this.oauth}>
            oauth
          </Button>
        </div>
    }

    return (
      <div>
        <h1>
          Create User
        </h1>
        {accountDetail}
      </div>
    );
  }
}

export default Form;