import styled from 'styled-components';

export default styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  font-family: 'Nanum Gothic';
  font-size: 15px;
  color: #30263a;
  letter-spacing: 0;
  text-align: right;
  border-bottom: 2px solid #f6f6f6;
  text-align: center;

  .responsive-container {
    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }
  }

  .logo {
    height: 35px;
    .logo-link {
      .logo-image {
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* width: 220px;
    margin-left: 50px; */
    width: 300px;

    @media screen and (max-width: 1024px) {
      display: none;
    }

    .menu-item {
      color: #30263a;
      text-decoration: none;

      &:hover {
        color: #1998d4;
      }
    }

    .active {
      color: #1998d4;
    }
  }

  .header-right {
    display: none;
    flex-direction: row;

    @media screen and (max-width: 1024px) {
      display: flex;
    }

    .try-now {
      padding: 10px 8px 8px;
      margin-right: 8px;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    .user-menu,
    .mobile-menu-toggle {
      padding: 8px;
      cursor: pointer;
      position: relative;
      z-index: 999;
      .user-avatar {
        .fas {
          font-size: 24px;
          color: #808080;
        }
      }
      .user-menu-list {
        display: none;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        margin-top: 6px;
        padding: 8px 0;
        position: absolute;
        right: -12px;
        min-width: 120px;

        .user-menu-list-item {
          padding: 6px 20px;
          text-align: left;
          text-decoration: none;
          color: #30263a;
          &:hover {
            background: #f5f7fa;
          }
        }
      }
      &:hover {
        .user-menu-list {
          display: flex;
          flex-direction: column;
          position: absolute;
        }
      }
    }

    .user-menu {
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    .mobile-menu-toggle {
      padding-right: 0;
      @media screen and (min-width: 1025px) {
        display: none;
      }
    }
  }
`;
