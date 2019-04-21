import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 120px 0;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 0;
  }

  .responsive-container {
    min-height: 0%;
  }

  .left {
    margin-right: 36px;

    @media screen and (max-width: 1024px) {
      margin-right: 0;
      width: 100%;
      order: 2;
      min-height: 0%;
    }

    .image-section {
      width: 100%;

      @media screen and (max-width: 1024px) {
      }

      @media screen and (max-width: 520px) {
      }

      .image-section-img {
        width: 100%;
      }
    }
  }

  .right {
    max-width: 42%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1024px) {
      max-width: 100%;
      width: 100%;
      order: 1;
      align-items: center;
      margin-bottom: 60px;
    }

    .title {
      margin-bottom: 10px;
      width: 100%;

      .title-text {
        font-family: 'Nanum Gothic';
        font-size: 35px;
        font-weight: 100;
        text-transform: uppercase;
        color: #000000;
        line-height: 46px;
        margin: 0;
      }
    }

    .content {
      margin-bottom: 10px;
      width: 100%;

      .content-text {
        opacity: 0.85;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        color: #333333;
        line-height: 26px;
      }
    }

    .signup-link {
      display: flex;
    }
  }
`;
