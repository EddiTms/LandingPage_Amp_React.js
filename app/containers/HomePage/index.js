import React from 'react';
import Footer from 'components/Footer';
import SectionTryNow from './SectionTryNow';
// import SectionTestiMonials from './SectionTestMonials';
import SectionSavingYourLife from './SectionSavingYourLife';

export default class AboutPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <SectionTryNow />
        {/* <SectionTestiMonials /> */}
        <SectionSavingYourLife />
        <Footer />
      </div>
    );
  }
}
