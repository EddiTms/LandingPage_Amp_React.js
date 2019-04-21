import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  @media screen and (max-width: 1024px) {
    padding: 50px 0;
  }

  .title {
    margin-bottom: 100px;

    @media screen and (max-width: 1024px) {
      margin-bottom: 40px;
    }

    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 35px;
      color: #333333;
      line-height: 46px;
      margin: 0;
      font-weight: 100;
      text-transform: uppercase;
    }
  }

  .faq-list {
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
    }

    .left {
      width: 50%;
      padding-right: 10px;

      @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 0;
      }
    }

    .right {
      width: 50%;
      padding-left: 10px;

      @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 0;
      }
    }

    .faq-list-item {
      .faq-list-item-title {
        background: #1998d4;
        margin-bottom: 26px;
        outline: none;
        padding: 13px 60px 13px 26px;
        border-radius: 6px;
        position: relative;

        @media screen and (max-width: 1024px) {
          padding-left: 16px;
          padding-right: 16px;
        }

        .faq-list-item-title-text {
          font-family: 'Nanum Gothic';
          font-size: 20px;
          color: #ffffff;
          font-weight: normal;
          margin: 0;
        }
      }

      .collapse-state-title {
        background: #f4f3f4;

        .faq-list-item-title-text {
          color: #333333;
        }
      }

      .faq-list-item-content {
        margin-bottom: 40px;

        .faq-list-item-content-text {
          opacity: 0.85;
          font-family: 'Montserrat';
          font-size: 16px;
          color: #333333;
          line-height: 26px;
          margin: 0;
        }
      }
    }
  }
`;
