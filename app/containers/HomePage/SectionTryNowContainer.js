import styled from 'styled-components';
import Background from 'images/bg7.svg';

export default styled.div`
  background-image: url("${Background}");
  background-size: cover;
  background-position: right 0px bottom 40px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  font-family: 'Nanum Gothic';
  min-height: 600px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    height: 680px;
  }

  .left-section {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-right: 15px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      padding-right: 0px;
      margin: 40px 0 60px;
    }

    .title-section {
      .title-text-section {
        .title-text {
          font-size: 40px;
          text-transform: uppercase;
          color: #30260a;
          margin: 0 0 16px;
          .logo-img {
            margin-top: -16px;
          }
        }
        .title-text-blue {
          font-size:30px;
          text-align:center;
          color: #27AAE1;
          text-transform: uppercase;
        }
      }
    }
    .button-section {
      display: flex;

      @media screen and (max-width: 1024px) {
        justify-content: center;
      }

      .try-now {
      }
    }
  }

  .right-section {
    min-height: 450px;
    padding-left: 15px;
    position: relative;
    width: 50%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      padding-left: 0px;
      max-width: 460px;
      margin: 30px 0 60px;
    }

    @media screen and (max-width: 520px) {
      min-height: calc(100vw - 20px);
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
    .image1-section {
      position: absolute;
      z-index: 10;
      left: 134px;
      bottom: 0;

      @media screen and (max-width: 1024px) {
        left: 0;
        right: 0;
      }

      @media screen and (max-width: 520px) {
        height: 100%;
      }

      .image1-img {
        @media screen and (max-width: 520px) {
          height: 100%;
        }
      }
    }

    .image2-section {
      position: absolute;
      left: 37px;
      bottom: 0;

      @media screen and (max-width: 1024px) {
        left: 0;
      }

      @media screen and (max-width: 520px) {
        height: 100%;
      }

      .image2-img {
        @media screen and (max-width: 520px) {
          height: calc(100% - 65px);
          position: absolute;
          bottom: 0;
        }
      }
    }

    .image3-section {
      position: absolute;
      right: 0;
      bottom: 0;

      @media screen and (max-width: 520px) {
        height: 100%;
      }

      .image3-img {
        @media screen and (max-width: 520px) {
          height: calc(100% - 65px);
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
`;
