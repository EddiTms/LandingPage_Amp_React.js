import React from 'react';
import FooterBottom from 'components/Footer/FooterBottom';
import MetaTags from 'react-meta-tags';
import SectionFaq from './SectionFaq';
import SectionContactUs from './SectionContactUs';

export default class SupportPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>AMP - Support</title>
        </MetaTags>
        <SectionFaq />
        <SectionContactUs />
        <FooterBottom />
      </div>
    );
  }
}
