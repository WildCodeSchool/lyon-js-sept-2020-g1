/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Contact.css';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  render() {
    const { lastName, firstName, email, comment } = this.state;
    return (
      <div className="bloc">
        <div>
          <label htmlFor="lastName">My lastName: </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => this.handleChange('lastName', e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="firstName">My firstName: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => this.handleChange('firstName', e.target.value)}
          />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="email">My email: </label>
          <input
            type="text"
            value={email}
            onChange={(e) => this.handleChange('email', e.target.value)}
          />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="comment">You can leave your comments here: </label>
          <textarea
            name="comment"
            onChange={(e) => this.handleChange('comment', e.target.value)}
            value={comment}
          />
          <br />
          <br />
        </div>

        <button type="button" className="button">
          Send
        </button>
      </div>
    );
  }
}
export default Contact;
