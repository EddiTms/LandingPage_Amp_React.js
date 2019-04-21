import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 60px 0 100px;

  .responsive-container {
    min-height: 0%;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-top: 30px;
  }

  .right {
    width: 50%;
    padding-left: 30px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      padding-left: 0px;
      margin-top: 60px;
      min-height: 0%;
    }

    @media screen and (max-width: 360px) {
      display: none;
    }

    .image1-section {
      margin-left: 60px;
      z-index: 3;
      position: relative;
      .image1-img {
        @media screen and (max-width: 600px) {
          width: 50%;
        }
      }
    }
    .image2-section {
      text-align: right;
      margin-top: -90px;
      margin-right: -100px;
      z-index: 2;
      position: relative;

      @media screen and (max-width: 1024px) {
        margin-right: 0px;
      }

      .image2-img {
        @media screen and (max-width: 600px) {
          width: 50%;
        }
      }
    }
    .image3-section {
      margin-top: -90px;
      z-index: 1;
      position: relative;
      .image3-img {
        @media screen and (max-width: 600px) {
          width: 60%;
        }
      }
    }
  }

  .left {
    width: 50%;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }

    .scene {
      text-align: left;
      width: 100%;
      padding: 0 20px;
      max-width: 450px;

      @media screen and (max-width: 1024px) {
        max-width: 100%;
        text-align: center;
      }

      .title {
        margin-bottom: 20px;

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
        margin-bottom: 30px;

        .content-text {
          opacity: 0.85;
          font-family: 'Montserrat';
          font-weight: 400;
          font-size: 16px;
          color: #333333;
          line-height: 26px;
        }
      }
    }
  }
`;
