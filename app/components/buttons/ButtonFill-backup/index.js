import styled from 'styled-components';
import RightArrow from 'images/right-arrow.svg';
import ButtonBg from 'images/button-bg.png';

export default styled.a`
  padding: 9px 56px 9px 20px;
  background: #1998D4;
  position: relative;
  display: flex;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  background-image: url("${ButtonBg}");
  background-position: right;
  background-repeat: no-repeat;
  font-family: 'Nanum Gothic';
  font-size: 15px;

  &:after {
    display: block;
    content: ' ';
    background-image: url("${RightArrow}");
    background-size: 8px 24px;
    position: absolute;
    right: 0;
    width: 26px;
    height: 22px;
  }
`;
