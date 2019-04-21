import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat';
  padding: 48px 0;

  .title-section {
    .title-text {
      font-size: 16px;
      font-weight: 400;
      color: #333333;
      opacity: 0.25;
    }
  }

  .content-section {
    .content {
      position: relative;
      .quote {
        position: absolute;
        top: -20px;
        left: -30px;
        display: inline-block;
        width: 67px;

        @media screen and (max-width: 1024px) {
          top: -12px;
          left: -20px;
          width: 48px;
        }

        .quote-img {
          width: 100%;
        }
      }
      .content-text {
        font-family: 'Nanum Gothic';
        font-size: 20px;
        font-weight: 300;
        color: #30263a;
        line-height: 25px;
        text-align: center;
        max-width: 600px;
      }
    }
  }

  .user-info-section {
    text-align: center;
    margin-top: 10px;
    .user-name {
      .user-name-text {
        opacity: 0.85;
        font-size: 16px;
        font-weight: 500;
        color: #1998d4;
        line-height: 26px;
        margin: 0;
      }
    }

    .user-position {
      .user-position-text {
        opacity: 0.35;
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 26px;
        margin: 0;
      }
    }
  }
`;
