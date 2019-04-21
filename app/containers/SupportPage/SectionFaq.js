import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/minimal-example.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import SectionFaqContainer from './SectionFaqContainer';

/* eslint-disable react/prefer-stateless-function */
class SectionFaq extends React.Component {
  render() {
    return (
      <SectionFaqContainer>
        <div className="responsive-container">
          <div className="title">
            <h1 className="title-text">Faq</h1>
          </div>

          <Accordion className="faq-list">
            <div className="left">
              <AccordionItem expanded="true" className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Why is emCall better than dialing 911?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Many calls to 911 are put on hold due to the absence of
                    enough 911 operators. There are over 6,500 911 centers in
                    U.S., each one operating on its own with its own standards.
                    Many 911 centers are facing a crisis in understaffing and
                    underfunding. Most 911 centers cannot find a person’s exact
                    location. If a person dials 911 but cannot talk due to a
                    medical emergency or facing a criminal assault, it is
                    possible 911 will hang up with no response. Not knowing it
                    is a medical emergency, 911 may have police sent instead of
                    an ambulance, which could be the difference between life and
                    death. emCall solves these problems by having you send a
                    medical alert for a medical emergency, and a panic alarm for
                    a personal security emergency to national 5-Diamond
                    certified alarm monitoring center. That means the emCall
                    alarm monitoring center’s professionally trained operators,
                    having your location and personal information sent from your
                    smartphone, including medical information where relevant,
                    know exactly what first responder response is necessary and
                    to where it should be sent,, saving precious time that save
                    lives. Whenever possible, emCall alarm monitoring center
                    operators will avoid 911 completely, directly contacting the
                    local ambulance or police unit for first responder dispatch.
                    emCall provides your geo-location for first responders to
                    get right to you.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    How does emCall work?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    emCall is there for you 24/7 wherever you have a reliable
                    cellular signal. You can arm emCall prior to experiencing a
                    medical emergency or personal security situation or you can
                    arm and send an alarm while you are in distress. Simply
                    tapping the emCall icon on your smartphone automatically
                    arms emCall. Then quickly tapping the blue medical alert
                    button or red panic alarm button three times within 4
                    seconds will send the alarm. Your alarm signal goes through
                    the cellular network directly to the emCall central
                    monitoring station. A professionally trained alarm
                    monitoring center operator will contact first responders for
                    dispatch to you, giving them your geo-location and when
                    first responders can receive it sending them your personal
                    information, including your photo if you have entered it in
                    settings, and medical information if you have entered it.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Who monitors emCall?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    emCall is monitored by one of the largest and most respected
                    national alarm companies in the U.S., with more 5-Diamond
                    central stations than any other company in the industry.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Do I have to buy any equipment to use emCall?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    You already have the equipment. It’s your smartphone, where
                    you will install the emCall app from iTunes for iPhones or
                    from Google Play for Android phones.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    How do I change my emCall personal information?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    When you tap the emCall icon on your smartphone screen,
                    emCall automatically arms. To change your personal
                    information, tap the profile icon on the upper right corner
                    of the screen. Then tap “Disarm” and enter your password to
                    “CHANGE PROFILE INFORMATION.” Once disarmed, tap the
                    “Settings” button. You can then tap whichever button you
                    want to change “Contact Info,” “Emergency Contact Info,”
                    “Medical Info,” and “Account Info.”
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    What happens if I send a medical alert or panic alarm by
                    mistake?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    You have a fifteen (15) second window of time to enter your
                    Login password and cancel the alarm. If you need more time,
                    after the 15 seconds a pop-up window will appear. Tapping
                    the green button calls the alarm monitoring center. The
                    alarm monitoring center operator will ask you to give the
                    “Safe Word” you created to cancel the alarm. You may be
                    subject to fines if first responders have already been
                    dispatched.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    What happens if I lose my phone connection?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    When emCall is armed, it automatically notifies you if your
                    cellular connection is lost, in which case you cannot use
                    your alarm. Your emCall alarm will be usable again when the
                    cellular network is reconnected.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Am I able to receive incoming calls if I have emCall armed?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Yes. While you are on the call emCall cannot be used. emCall
                    will automatically be on your phone screen when you hang up.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Can I make an outgoing phone call while emCall is armed?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Yes. Close the emCall app to make your call. After the call,
                    open the app to automatically arm.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    How do I know the alarm monitoring center received my
                    medical alert or panic alarm?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    The alarm monitoring center will call you when you send a
                    medical alert, to confirm you need an ambulance. If the
                    alarm monitoring center does not get an answer, it will
                    contact dispatch to send first responders. Sending a panic
                    alarm assumes that you are in distress and first responder
                    dispatch will be contacted to send the police. You WILL NOT
                    receive a call back when sending a panic alarm.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </div>

            <div className="right">
              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Are there fees for false alarms.
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Any fees you may receive for a false alarm that cannot be
                    canceled are regulated by the local first responder
                    jurisdiction and are your responsibility.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Will emCall track me if I am in a car or other form of
                    moving transportation?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Yes, provided there is a reliable cellular signal. emCall
                    only tracks you after an alarm is sent. When you send a
                    medical alert or panic alarm, emCall continues to send the
                    alarm monitoring center your location at intervals for
                    tracking, even if you’re moving.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    If I am in a multi-story, and/or multi-unit building
                    complex, how will emCall know where I am within the building
                    or complex?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    An emCall alarm will report your geolocation address to the
                    alarm monitoring center for first responders. You can let
                    emCall know where you are in a building or building complex
                    by entering information such as your floor number, hotel
                    room number, office or suite number, or visiting apartment
                    number in “Location notes.” You can access Location Notes by
                    tapping the emCall icon on your smartphone screen and arming
                    emCall, then tapping the “Profile” button on the top right
                    of the Armed screen. Then disarm, and enter your password to
                    “CHANGE PROFILE INFORMATION.” Then tap “Location Notes” and
                    enter your location information. There is a Help question
                    mark on the upper right corner of your Location Notes
                    screen. You can change your Location Notes information as
                    often as you need. It will be saved in a list for future
                    use. You can even enter outdoor locations like parks or
                    hiking trails. As long as you have a reliable cellular
                    connection, Location Notes information will be automatically
                    sent to the alarm monitoring center when firing an emCall
                    medical alert or panic alarm.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Can I use emCall if I am hiking or camping in a remote area?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    emCall is a great companion for the outdoor enthusiast as
                    long as your smartphone has a reliable cellular signal.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    What if I get a new phone?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Install the emCall app on your new phone. Open the app and
                    login. The emCall information from your previous phone will
                    be available on your new phone.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Where should I put my emCall app on my phone screens?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    We recommend you place the emCall app icon on the home
                    screen of your smartphone for easy and ready use. When you
                    tap the emCall icon, emCall will auto arm.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Can I fire the panic alarm silently?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Yes. On the Armed screen tap on the Siren speaker symbol on
                    the left side of the screen. It will change to “Siren Off.”
                    Tap again and it will change to “Siren On.” In the “Siren
                    off” setting, your panic alarm will fire without the siren
                    noise, and the alarm will be received by the alarm
                    monitoring center as a “silent alarm.” The alarm monitoring
                    center will report the alarm to police dispatch as a “silent
                    alarm,” and police response may be modified accordingly.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Do I have to enter my private medical information?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Your medical information is entered voluntarily by you.{' '}
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Will emCall work with WiFi?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    No. emCall does not work with WiFi. Your smartphone must
                    have a reliable cellular signal for emCall to work.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    What is “Auto-Lock Override”?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    Auto-Lock Override allows your phone’s display to stay on
                    when armed. For example, using emCall overnight on a
                    nightstand at home or when traveling. emCall’s screen will
                    be lit continuously, preventing your phone’s timed Auto-Lock
                    function from turning the screen off, allowing you to
                    immediately send an alarm in an emergency. When using
                    Auto-Lock Override, keep your phone charging to avoid
                    battery loss.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem className="faq-list-item">
                <AccordionItemTitle
                  className="faq-list-item-title"
                  hideBodyClassName="collapse-state-title"
                >
                  <h3 className="faq-list-item-title-text">
                    Will emCall work anywhere?
                  </h3>
                  <div className="accordion__arrow" role="presentation" />
                </AccordionItemTitle>
                <AccordionItemBody className="faq-list-item-content">
                  <p className="faq-list-item-content-text">
                    emCall will work where there is a reliable cellular signal
                    in the continental United States, Alaska and Hawaii.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </div>
          </Accordion>
        </div>
      </SectionFaqContainer>
    );
  }
}

export default SectionFaq;
