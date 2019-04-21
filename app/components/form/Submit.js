import styled from 'styled-components';

export default styled.input`
  border: 1px solid #1998d4;
  border-radius: 50px;
  outline: none;
  padding: 9px 20px;
  font-family: 'Nanum Gothic';
  font-size: 15px;
  text-decoration: none;
  color: #1998d4;
  -webkit-text-fill-color: rgba(25, 152, 212, 1);
  width: fit-content;
  cursor: pointer;

  &:disabled {
    border-color: #dadada;
    color: #dadada;
  }
`;
