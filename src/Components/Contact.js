/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable */
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      errorLastName: false,
      errorFirstName: false,
      errorEmail: false,
      errorComment: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleErrorLastName = () => {
    const { lastName } = this.state;
    if (lastName.length <= 0) {
      this.setState({ errorLastName: true });
    }
  };
  handleErrorFirstName = () => {
    const { firstName } = this.state;
    if (firstName.length <= 0) {
      this.setState({ errorFirstName: true });
    }
  };
  handleErrorEmail = () => {
    const { email } = this.state;
    if (email.length <= 0) {
      this.setState({ errorEmail: true });
    }
  };
  handleErrorComment = () => {
    const { comment } = this.state;
    if (comment.length <= 0) {
      this.setState({ errorComment: true });
    }
  };
  handleChange = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  render() {
    const {
      lastName,
      firstName,
      email,
      comment,
      errorLastName,
      errorFirstName,
      errorEmail,
      errorComment,
    } = this.state;
    return (
      <div className="contact-main-container">
        <h1>Contact</h1>
        <p>For any question or suggestion, please fulfill the form below.</p>
        <div className="form-container">
          <div>
            <label htmlFor="lastName">Lastname : </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => this.handleChange('lastName', e.target.value)}
              onBlur={this.handleErrorLastName}
              placeholder="Bocuse"
            />
            <p className="required">
              {errorLastName && 'the lastName is required'}
            </p>

            <br />
            <br />
          </div>
          <div>
            <label htmlFor="firstName">Firstname : </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => this.handleChange('firstName', e.target.value)}
              onBlur={this.handleErrorFirstName}
              placeholder="Paul"
            />
            <p className="required">
              {errorFirstName && 'the firstName is required'}
            </p>
            <br />
            <br />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              value={email}
              onChange={(e) => this.handleChange('email', e.target.value)}
              onBlur={this.handleErrorEmail}
              placeholder="paulbocuse@gmail.com"
            />
            <p className="required">{errorEmail && 'an email is required'}</p>
            <br />
            <br />
          </div>
          <div>
            <label htmlFor="comment">Message :</label>
            <textarea
              name="comment"
              value={comment}
              onChange={(e) => this.handleChange('comment', e.target.value)}
              onBlur={this.handleErrorComment}
              rows="5"
              placeholder="Your message..."
            />
            <p className="required">
              {errorComment && 'a comment is required'}
            </p>
            <br />
            <br />
          </div>
          <button type="button" className="send-button">
            SEND
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
