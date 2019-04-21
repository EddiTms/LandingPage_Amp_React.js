import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 472px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  .title {
    margin-bottom: 14px;

    @media screen and (max-width: 1024px) {
      margin-bottom: 40px;
    }

    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 34px;
      font-weight: 100;
      text-transform: uppercase;
      color: #333333;
      line-height: 46px;
      margin: 0;
    }
  }

  .menu {
    width: 100%;
    max-width: 271px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      max-width: 290px;
    }

    .menu-item {
      opacity: 0.85;
      font-family: 'Montserrat';
      font-size: 16px;
      text-decoration: none;
      color: #333333;
      line-height: 26px;
      margin: 0;

      &:hover {
        color: #1998d4;
      }
    }

    .active {
      color: #1998d4;
    }
  }

  .account-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 90px 0 30px;

    @media screen and (max-width: 1024px) {
      padding-top: 40px;
    }

    .title-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;

      .title-text-section {
        .title-text {
          font-family: 'Nanum Gothic';
          font-size: 24px;
          font-weight: 100;
          color: #333333;
          margin: 0;
        }
      }

      .edit-button-section {
      }
    }

    .form-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .billing-history-list {
      display: flex;
      flex-direction: column;

      .list-title {
        margin: 20px 0 24px;

        .list-title-text {
          opacity: 0.53;
          font-family: 'Montserrat';
          font-size: 16px;
          font-weight: 400;
          color: #333333;
          margin: 0;
        }
      }

      .billing-history-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 8px;

        .billing-date {
          min-width: 100px;

          .billing-date-text {
            opacity: 0.4;
            font-family: 'Montserrat';
            font-size: 13px;
            color: #333333;
            margin: 3px 20px 0 0;
          }
        }

        .billing-content {
          .billing-content-text {
            font-family: 'Montserrat';
            font-size: 16px;
            color: #333333;
            margin: 0;
          }
        }
      }
    }
  }
`;
