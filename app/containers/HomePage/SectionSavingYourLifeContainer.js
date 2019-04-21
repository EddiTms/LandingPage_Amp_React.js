import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 120px 0 160px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 60px;
    padding-bottom: 100px;
  }

  .left-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      margin: 40px 0;
      text-align: center;
    }

    .section-title {
      margin-bottom: 16px;

      .section-title-text {
        opacity: 0.25;
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        margin: 0;
      }
    }

    .content-title {
      max-width: 380px;
      margin-bottom: 32px;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
      }

      .content-title-text {
        font-family: 'Nanum Gothic';
        font-size: 35px;
        font-weight: 400;
        color: #333333;
        line-height: 46px;
        text-transform: uppercase;
        margin: 0;
      }
    }

    .content {
      max-width: 380px;
      margin-bottom: 48px;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
      }

      .content-text {
        opacity: 0.85;
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 26px;
        margin: 0;
      }
    }

    .button-section {
      .learn-more-btn {
      }
    }
  }

  .right-section {
    width: 50%;
    min-height: 0%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      margin-top: 40px;
    }

    .right-section-bg {
      width: 100%;
    }
  }
`;
