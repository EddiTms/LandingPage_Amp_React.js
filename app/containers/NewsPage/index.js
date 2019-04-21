import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 60px;
  font-family: 'Nanum Gothic';
  color: #ccc;
  text-align: center;
  margin: 100px 0 0;
`;

export default class NewsPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <H1>Comming Soon !</H1>
      </div>
    );
  }
}
