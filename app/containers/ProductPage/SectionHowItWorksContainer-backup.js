import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafcfe;
  padding: 100px 0;

  @media screen and (max-width: 1024px) {
    padding: 60px 0 10px;
  }

  .title {
    margin-bottom: 60px;
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

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .description-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 240px;

      @media screen and (max-width: 1024px) {
        margin: 0 auto 30px;
        max-width: 400px;
      }

      .description-image-section {
        width: 215px;
        height: 215px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        background: #ffffff;

        .description-image {
        }
      }
    }

    .description-content {
      .description-content-text {
        font-family: 'Nanum Gothic';
        font-size: 20px;
        color: #666666;
        text-align: center;
        font-weight: 100;
        b {
          font-weight: 900;
          color: #000000;
        }
      }
    }
  }
`;
