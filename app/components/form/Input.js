import styled from 'styled-components';

export default styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #1998d4;
  border-radius: 5px;
  outline: none;
  opacity: 0.73;
  font-family: 'Montserrat';
  font-size: 15px;
  color: #6b7489;
  margin: 0;
  padding: 9px 20px;

  &:disabled {
    border-color: #dadada;
  }
`;
