import React from 'react';
import ButtonOutline from 'components/buttons/ButtonOutline';
import Form from 'components/form/Form';
import FormControlGroup from 'components/form/FormControlGroup';
import Label from 'components/form/Label';
import TextArea from 'components/form/TextArea';
import Dropdown from 'components/form/Dropdown';
import Submit from 'components/form/Submit';

export default class SubscriptionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  onEdit = () => {
    const { disabled } = this.state;

    this.setState({ disabled: !disabled });
  };

  render() {
    const options = [
      { value: 'test-1', label: 'Test One' },
      { value: 'test-2', label: 'Test Two' },
      { value: 'test-3', label: 'Test Three' },
      { value: 'test-4', label: 'Test Four' },
      { value: 'test-5', label: 'Test Five' },
    ];

    const defaultOption = options[0];

    return (
      <div className="account-content">
        <div className="title-section">
          <div className="title-text-section">
            <h2 className="title-text">Subscription</h2>
          </div>

          <div className="edit-button-section">
            <ButtonOutline onClick={this.onEdit}>Edit</ButtonOutline>
          </div>
        </div>

        <div className="form-section">
          <Form onSubmit={this.handleSubmit}>
            <FormControlGroup>
              <Label>Subscription</Label>
              <Dropdown
                disabled={this.state.disabled}
                options={options}
                value={defaultOption}
                // className="select-subscription"
                controlClassName="select-subscription-input"
                menuClassName="select-subscription-dropdown"
                placeholder="Select an option"
                arrowClosed={<span className="arrow arrow-closed" />}
                arrowOpen={<span className="arrow arrow-open" />}
              />
            </FormControlGroup>

            <FormControlGroup>
              <Label>Email</Label>
              <TextArea disabled={this.state.disabled} />
            </FormControlGroup>

            <div className="billing-history-list">
              <div className="list-title">
                <h4 className="list-title-text">Billing history</h4>
              </div>

              <div className="billing-history-item">
                <div className="billing-date">
                  <p className="billing-date-text">03.04.2018</p>
                </div>
                <div className="billing-content">
                  <p className="billing-content-text">Vestibulum rutru</p>
                </div>
              </div>
              <div className="billing-history-item">
                <div className="billing-date">
                  <p className="billing-date-text">03.04.2018</p>
                </div>
                <div className="billing-content">
                  <p className="billing-content-text">Fusce vehicula</p>
                </div>
              </div>
              <div className="billing-history-item">
                <div className="billing-date">
                  <p className="billing-date-text">03.04.2018</p>
                </div>
                <div className="billing-content">
                  <p className="billing-content-text">Donec facilisis</p>
                </div>
              </div>
            </div>

            <FormControlGroup className="submit-section">
              <Submit
                type="submit"
                disabled={this.state.disabled}
                value="Save"
              />
            </FormControlGroup>
          </Form>
        </div>
      </div>
    );
  }
}
