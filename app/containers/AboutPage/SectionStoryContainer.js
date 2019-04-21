import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 0 60px;
  background: #fafcfe;

  @media screen and (max-width: 1024px) {
    padding-top: 80px;
  }

  .title {
    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 35px;
      color: #333333;
      line-height: 46px;
      margin: 0 0 24px;
      text-transform: uppercase;
      font-weight: 100;
    }
  }

  .content {
    padding: 0 10px;
    width: 100%;
    .content-text {
      opacity: 0.85;
      font-family: 'Montserrat';
      font-size: 16px;
      color: #333333;
      line-height: 26px;
      margin: 0 0 24px;

      b {
        font-weight: 700;
      }
    }
  }
`;
