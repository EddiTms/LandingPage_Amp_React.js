import styled from 'styled-components';
import Background from 'images/bg8.svg';

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

  .left {
    min-height: 450px;
    padding-right: 15px;
    position: relative;
    width: 50%;

    @media screen and (max-width: 1024px) {
      width: 100%;
      padding-right: 0px;
      max-width: 460px;
      margin: 60px auto 0;
      order: 2;
    }

    @media screen and (max-width: 520px) {
      min-height: calc(100vw - 20px);
    }
    
    .image1-section {
      position: absolute;
      z-index: 10;
      left: 96px;
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
      right: 36px;
      bottom: 0;

      @media screen and (max-width: 1024px) {
        left: 0;
        right: unset;
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
      left: 0;
      bottom: 0;

      @media screen and (max-width: 1024px) {
        left: unset;
        right: 0;
      }

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

  .right {
    width: 50%;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 1024px) {
      width: 100%;
      order: 1;
    }

    .right-carousel {
      @media screen and (max-width: 1024px) {
        width: 100%;
      }

      .scene {
        text-align: left;
        width: 100%;
        height: 100%;
        padding: 0 40px;
        max-width: 450px;

        @media screen and (max-width: 1024px) {
          max-width: unset;
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

      .carousel {
        .slide {
          background: #ffffff;
        }

        .control-dots {
          position: inherit;
          text-align: left;
          padding: 0;
          margin: 80px 0 0 40px;

          @media screen and (max-width: 1024px) {
            display: flex;
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
            max-width: 240px;
          }

          .dot {
            border-radius: 0;
            height: 4px;
            width: 50px;
            background: #d7d7d7;
            box-shadow: none;
            margin: 0 20px 0 0;
            outline: none;
            opacity: 1;

            @media screen and (max-width: 1024px) {
              margin: auto;
            }
          }

          .dot.selected {
            background-image: url("${Background}");
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
`;
