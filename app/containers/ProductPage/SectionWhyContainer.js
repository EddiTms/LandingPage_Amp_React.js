import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 0;

  @media screen and (max-width: 1024px) {
    padding-bottom: 10px;
  }

  .article {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      margin-bottom: 60px;
    }

    .text-section {
      width: 50%;

      @media screen and (max-width: 1024px) {
        width: 100%;
        text-align: center;
        order: 1;
      }

      .title {
        margin-bottom: 30px;
        .title-text {
          opacity: 0.85;
          font-family: 'Montserrat';
          font-size: 30px;
          color: #333333;
          line-height: 35px;
          margin: 0;
          font-weight: 400;
        }
      }

      .content {
        .content-text {
          opacity: 0.85;
          font-family: 'Montserrat';
          font-size: 16px;
          color: #333333;
          line-height: 26px;
          margin: 0 0 24px;
        }
      }

      .image-section-text {
        width: 50%;
        display: none;

        @media screen and (max-width: 1024px) {
          width: 100%;
          max-width: 320px;
          margin-bottom: 20px;
          display: inline-block;
        }

        @media screen and (max-width: 520px) {
          max-width: 100%;
          margin-bottom: 20px;
          display: inline-block;
        }

        .article-image {
          width: 100%;
        }
      }
    }

    .image-section {
      width: 50%;
      min-height: 0%;

      @media screen and (max-width: 1024px) {
        width: 100%;
        max-width: 320px;
        order: 2;
      }

      @media screen and (max-width: 520px) {
        max-width: unset;
      }

      .article-image {
        width: 100%;
      }
    }

    .image-section.next-part {
      @media screen and (max-width: 1024px) {
        display: none;
      }

      @media screen and (max-width: 520px) {
        display: none;
      }
    }
  }

  .left-text {
    .text-section {
      padding: 0 45px;

      @media screen and (max-width: 1024px) {
        padding: unset;
      }
    }

    .image-section {
      padding-left: 10px;

      @media screen and (max-width: 1024px) {
        padding: unset;
      }
    }
  }

  .right-text {
    .text-section {
      padding: 0 50px;

      @media screen and (max-width: 1024px) {
        padding: unset;
      }
    }
    .image-section {
      padding-right: 10px;

      @media screen and (max-width: 1024px) {
        padding: unset;
      }
    }
  }
  .description-list {
    width: 100%;
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
      max-width: 185px;

      @media screen and (max-width: 1024px) {
        margin: 0 auto 10px;
        max-width: 400px;
      }

      .description-image-section {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .description-image {
          max-width: 140px;
          width: 85%;
        }
      }
    }
  }
`;
