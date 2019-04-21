import React from 'react';
import styled from 'styled-components';
import { withApi } from 'components/Api';

const Button = styled.button`
  padding: 8px 20px;
  text-align: left;
  text-decoration: none;
  color: #30263a;
  cursor: pointer;
  font-family: 'Nanum Gothic';
  font-size: 15px;
  outline: none;

  &:hover {
    background: #f5f7fa;
  }
`;

// eslint-disable-next-line react/prop-types
const SignOutButton = ({ api }) => (
  <Button type="button" onClick={api.signout}>
    Log Out
  </Button>
);

export default withApi(SignOutButton);
