import React from 'react';
import ButtonOutline from 'components/buttons/ButtonOutline';
import Form from 'components/form/Form';
import FormControlGroup from 'components/form/FormControlGroup';
import Label from 'components/form/Label';
import Input from 'components/form/Input';
import Submit from 'components/form/Submit';

export default class GeneralPage extends React.Component {
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
    return (
      <div className="account-content">
        <div className="title-section">
          <div className="title-text-section">
            <h2 className="title-text">General</h2>
          </div>

          <div className="edit-button-section">
            <ButtonOutline onClick={this.onEdit}>Edit</ButtonOutline>
          </div>
        </div>

        <div className="form-section">
          <Form onSubmit={this.handleSubmit}>
            <FormControlGroup>
              <Label>Name</Label>
              <Input type="text" disabled={this.state.disabled} />
            </FormControlGroup>

            <FormControlGroup>
              <Label>User</Label>
              <Input type="text" disabled={this.state.disabled} />
            </FormControlGroup>

            <FormControlGroup>
              <Label>Address</Label>
              <Input type="text" disabled={this.state.disabled} />
            </FormControlGroup>

            <FormControlGroup>
              <Label>Phone</Label>
              <Input type="text" disabled={this.state.disabled} />
            </FormControlGroup>

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
