import { createGlobalStyle } from 'styled-components';
import DropdownBg from 'images/dropdown.svg';
import DropupBg from 'images/dropup.svg';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow: overlay;
  }
  
  #app {
    background-color: #ffffff;
    min-height: 100%;
    min-width: 100%;
    padding: 0;
  }

  .responsive-container {
    height: inherit;
    width: inherit;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
    background: inherit;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    letter-spacing: inherit;
    text-align: inherit;
    border-bottom: inherit;
    text-align: inherit;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    background-color: inherit;
    flex-direction: inherit;
    min-height: inherit;

    all: inherit;

    max-width: 1024px;
    background: transparent;
    margin: 0 auto;
    border: none;
    padding: 0 30px;

    @media screen and (max-width: 1024px) {
      max-width: 600px;
    }
  }

  // react-dropdown
  
  .select-subscription-dropdown {
    border-color: #1998d4!important;
    
    .Dropdown-option {
      opacity: 0.73!important;
      color: #6b7489!important;
    }
  }

  .Dropdown-disabled {
    border-color: #dadada!important;
  }
  
  .arrow {
    background-image: url("${DropdownBg}");
    background-size: 12px 12px;
    border: none;
    width: 12px;
    height: 12px;
    position: absolute;
    right: 10px;
    top: 14px;
  }

  .arrow-open {
    background-image: url("${DropupBg}");
  }

  .arrow-closed {
    background-image: url("${DropdownBg}");
  }

  // form
  .submit-section {
    align-items: center;
    padding: 30px 0;
  }

  .question {
    font-family: 'Nanum Gothic';
    margin: 0 0 30px 0;

    a {
      text-decoration: none;
      color: #1998d4;
    }
  }

  .error {
    font-family: 'Nanum Gothic';
    margin: 0 0 30px 0;
    color: red;
  }

  //carousel

  .carousel-try-now {
    position: absolute;
    bottom: 108px;
    left: 34px;

    @media screen and (max-width: 1024px) {
      display: flex;
      left: 0;
      right: 0;
      bottom: 45px;

      a {
        margin: auto;
      }
    }
  }

  // accordian

  .accordion__arrow {
    transition: transform 0.25s ease;
    right: 20px!important;
    color: #1998D4;

    @media screen and (max-width: 1024px) {
      right: 10px!important;
    }
  }

  .accordion__arrow::after,
  .accordion__arrow::before {
    height: 3px!important;
  }

  .accordion__arrow::before {
    top: 3px!important;
    left: 8px!important;
  }

  .accordion__arrow::after {
    top: 8px!important;
    right: 6px!important;
  }
  
  [aria-expanded='true'] .accordion__arrow::before,
  [aria-selected='true'] .accordion__arrow::before,
  [aria-expanded='true'] .accordion__arrow::after,
  [aria-selected='true'] .accordion__arrow::after {
    color: white;
  }

  [aria-expanded='true'] .accordion__arrow::before,
  [aria-selected='true'] .accordion__arrow::before {
    transform: rotate(45deg)!important;
  }

  [aria-expanded='true'] .accordion__arrow::after,
  [aria-selected='true'] .accordion__arrow::after {
    transform: rotate(-45deg)!important;
  }

  [aria-expanded='true'] .accordion__arrow,
  [aria-selected='true'] .accordion__arrow {
    transition: transform 0.25s ease;
    transform: rotate(90deg)!important;
  }
`;

export default GlobalStyle;
