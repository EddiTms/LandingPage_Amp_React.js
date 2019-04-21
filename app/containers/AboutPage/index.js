import React from 'react';
import Footer from 'components/Footer';
import MetaTags from 'react-meta-tags';
import SectionStory from './SectionStory';
import SectionFounders from './SectionFounders';
import SectionMission from './SectionMission';

export default class AboutPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>AMP - About</title>
        </MetaTags>
        <SectionStory />
        <SectionFounders />
        <SectionMission />
        <Footer />
      </div>
    );
  }
}
