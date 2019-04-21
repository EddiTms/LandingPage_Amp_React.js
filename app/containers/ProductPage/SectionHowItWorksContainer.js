import styled from 'styled-components';
import Background from 'images/bg7.svg';

export default styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafcfe;
  padding: 100px 0; */

  background-image: url("${Background}");
  background-size: cover;
  background-position: right 0px bottom 40px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Nanum Gothic';
  display: flex;
  align-items: center;
  /* padding: 80px 0 40px; */
  padding: 80px 0 50px;

  @media screen and (max-width: 1024px) {
    padding: 60px 0 10px;
  }

  .title {
    margin-bottom: 40px;
    text-align: center;
    .title-text {
      font-family: 'Nanum Gothic';
      font-weight: 100;
      text-transform: uppercase;
      font-size: 35px;
      color: #333333;
      line-height: 46px;
      margin: 0;
    }
  }

  .description-list {
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .description-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 220px;

      @media screen and (max-width: 1024px) {
        margin: 0 auto 30px;
        max-width: 400px;
      }

      .description-image-section {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .description-image {
          width: 200px;
        }
      }
    }

    .description-content {
      width: 100%;
      .description-content-text {
        font-family: 'Nanum Gothic';
        font-size: 16px;
        color: #666666;
        font-weight: 100;
        display: block;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;

        b {
          font-weight: 900;
          color: #000000;
        }

        &:hover {
          display: block;
          text-align: left;
        }
      }
    }
  }
`;
