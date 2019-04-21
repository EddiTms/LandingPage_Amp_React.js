import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 472px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  .title {
    margin-bottom: 30px;

    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 34px;
      font-weight: 100;
      text-transform: uppercase;
      color: #333333;
      line-height: 46px;
      margin: 0;
    }
  }

  .try-login {
    /* position: absolute; */
  }
`;
