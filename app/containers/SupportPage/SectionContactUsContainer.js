import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f8fd;
  padding: 90px 0 60px;
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    padding: 60px 0 40px;
  }

  .title {
    margin-bottom: 40px;
    .title-text {
      font-family: 'Nanum Gothic';
      font-size: 35px;
      color: #333333;
      line-height: 46px;
      margin: 0;
      text-transform: uppercase;
      font-weight: 100;
    }
  }

  .contact-us {
    width: 100%;
    max-width: 465px;
    text-align: center;

    .contact-us-form {
      width: 100%;
      .contact-us-form-control-group {
        margin-bottom: 20px;
        text-align: center;

        .contact-us-form-control {
          background: #ffffff;
          border: 1px solid #1998d4;
          border-radius: 5px;
          outline: none;
          opacity: 0.73;
          font-family: 'Montserrat';
          font-size: 15px;
          color: #6b7489;
          margin: 0;
          padding: 9px 20px;
          width: 100%;
        }

        .contact-us-form-textarea {
          resize: none;
          min-height: 95px;
        }
      }
    }

    .contact-success-image {
      width: 50px;
      color: #333333;
    }

    .contact-success-subtitle {
      text-align: center;
      color: #333333;
      font-size: 18px;
      margin-bottom: 20px;
    }

    .contact-success-context {
      text-align: center;
      color: #333333;
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
`;
