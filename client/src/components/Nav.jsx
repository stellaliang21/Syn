import React from 'react';
import { Link }from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background: #4CAF50;
  margin-bottom: 25px;
`

const StyledLink = styled(
  styled(Link)`
    &:hover {
      text-decoration: underline;
    }
  `,
  'active'
)`
  color: white;
`;


const NavLink = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  `
  
  const Links = styled.li`
  text-decoration: none;
`

const Nav = () => {
  return(
    <Navbar>
      <NavLink>
      <Links>
          <StyledLink to='/'>Home</StyledLink>
        </Links>
        <Links>
          <StyledLink to='/pricing'>Pricing</StyledLink>
        </Links>
        <Links>
          <StyledLink to='/contactus'>Contact Us</StyledLink>
        </Links>
        <Links>
          <StyledLink to='/form'>Create User</StyledLink>
        </Links>
        <Links>
          <StyledLink to='/addFund'>Add Fund</StyledLink>
        </Links>
      </NavLink>
    </Navbar>
  )
}

export default Nav;