import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 130px 0 150px;

  @media screen and (max-width: 1024px) {
    padding: 100px 0;
  }

  .title {
    margin-bottom: 20px;

    @media screen and (max-width: 1024px) {
      text-align: center;
    }

    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 35px;
      color: #333333;
      line-height: 46px;
      margin: 0;
      text-transform: uppercase;
      font-weight: 100;
    }
  }

  .content {
    .content-text {
      opacity: 0.85;
      font-family: 'Montserrat';
      font-size: 16px;
      color: #333333;
      line-height: 26px;
      margin: 0;
    }
  }
`;
