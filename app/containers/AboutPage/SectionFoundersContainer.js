import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 0 200px;

  .title {
    text-align: center;
    margin-bottom: 210px;

    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 35px;
      font-weight: 100;
      color: #333333;
      line-height: 46px;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .founders {
    background: #fafcfe;
    padding: -100px 0;

    .founder {
      .intro {
        width: 100%;
        position: relative;
        background: #ffffff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
        padding: 50px;

        .photo {
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          height: 200px;
          overflow: hidden;

          .photo-img {
            width: 100%;
          }
        }

        .name-position {
          .name {
            .name-text {
              font-family: 'Nanum Gothic';
              font-size: 36px;
              font-weight: 900;
              color: #333333;
              line-height: 42px;
              margin: 0;
            }
          }

          .position {
            .position-text {
              opacity: 0.25;
              font-family: 'Montserrat';
              font-size: 20px;
              font-weight: 500;
              color: #333333;
              margin: 0;
            }
          }
        }

        .content {
          .content-text {
            opacity: 0.85;
            font-family: 'Montserrat';
            font-size: 16px;
            color: #333333;
            line-height: 26px;

            a {
              color: #1998d4;
            }

            b {
              font-weight: 700;
            }
          }
        }
      }
    }

    .right {
      max-width: 712px;
      margin: -50px 0 0 auto;

      .intro {
        padding-top: 40px;
        .photo {
          top: -90px;
          left: 80px;

          @media screen and (max-width: 1024px) {
            left: 0;
            margin: auto;
            right: 0;
          }
        }

        .name-position {
          margin-left: 270px;
          margin-bottom: 40px;

          @media screen and (max-width: 1024px) {
            margin-left: 0;
            margin-top: 120px;
            text-align: center;
          }
        }
      }
    }

    .left {
      max-width: 691px;
      margin: 180px 0 -200px 160px;

      @media screen and (max-width: 1024px) {
        margin-left: 0;
      }

      .intro {
        padding-left: 120px;

        @media screen and (max-width: 1024px) {
          padding-left: 40px;
        }

        .photo {
          top: -60px;
          left: -130px;

          @media screen and (max-width: 1024px) {
            top: -90px;
            left: 0;
            right: 0;
            margin: auto;
          }
        }
        .name-position {
          margin-bottom: -10px;

          @media screen and (max-width: 1024px) {
            margin-left: 0;
            margin-top: 120px;
            margin-bottom: 40px;
            text-align: center;
          }
        }
      }
    }
  }
`;
