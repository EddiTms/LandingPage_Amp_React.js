import React from 'react';
import Footer from 'components/Footer';
import MetaTags from 'react-meta-tags';
import SectionBanner1 from './SectionBanner1';
import SectionBanner2 from './SectionBanner2';
import SectionHowItWorks from './SectionHowItWorks';
import SectionWhy from './SectionWhy';

export default class ProductPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>AMP - Product</title>
        </MetaTags>
        <SectionBanner1 />
        <SectionBanner2 />
        <SectionHowItWorks />
        <SectionWhy />
        <Footer />
      </div>
    );
  }
}
