import styled from 'styled-components';

export default styled.div`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .social-section {
    .social-link {
      margin: 0 10px;
    }
  }

  .menu-section {
    margin-top: 30px;
    .menu-item {
      margin: 0 8px;
      text-decoration: none;
      color: #666666;

      &:hover {
        color: #1998d4;
      }
    }
  }

  .privacy-policy {
    margin-top: 14px;
    margin-bottom: 90px;
    .privacy-policy-text {
      color: #b9b9b9;
      font-weight: 400;

      .privacy-policy-link {
        color: #b9b9b9;
        text-decoration: none;
        margin-left: 12px;

        &:hover {
          color: #1998d4;
        }
      }
    }
  }
`;
