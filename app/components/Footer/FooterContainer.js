import styled from 'styled-components';
import Background from 'images/footer-bg.svg';

export default styled.div`
  background-image: url("${Background}");
  background-size: cover;
  background-position: top center;
  padding-top: 110px;
  font-family: 'Nanum Gothic';
  font-size: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .get-app-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .footer-logo {
      margin-bottom: 20px;
      width: 120px;
      .footer-logo-image {
        width: 100%;
      }
    }
    .get-app {
    }
  }

  .footer-bottom {
    /* margin-top: 80px; */
  }
`;
