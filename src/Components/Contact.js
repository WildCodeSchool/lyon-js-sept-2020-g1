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
      <div className="bloc">
        <div>
          <label htmlFor="lastName">My lastName : </label>
          <input
            type="text"
            placeholder="lastName"
            focus
            value={lastName}
            required
            onChange={(e) => this.handleChange('lastName', e.target.value)}
            onBlur={this.handleErrorLastName}
          />
          <p className="required">
            {errorLastName && 'the lastName is required'}
          </p>

          <br />
          <br />
        </div>
        <div>
          <label htmlFor="firstName">My firstName : </label>
          <input
            type="text"
            value={firstName}
            placeholder="firstName"
            required
            onChange={(e) => this.handleChange('firstName', e.target.value)}
            onBlur={this.handleErrorFirstName}
          />
          <p className="required">
            {errorFirstName && 'the firstName is required'}
          </p>
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="email">My email : </label>
          <input
            type="text"
            value={email}
            placeholder="toto@exemple.com"
            required
            onChange={(e) => this.handleChange('email', e.target.value)}
            onBlur={this.handleErrorEmail}
          />
          <p className="required">{errorEmail && 'an email is required'}</p>
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="comment">Your comments :</label>
          <textarea
            name="comment"
            value={comment}
            placeholder="Write your comments"
            required
            onChange={(e) => this.handleChange('comment', e.target.value)}
            onBlur={this.handleErrorComment}
          />
          <p className="required">{errorComment && 'a comment is required'}</p>
          <br />
          <br />
        </div>
        <button type="button" className="button">
          <p className="button">Send</p>
        </button>
      </div>
    );
  }
}

export default Contact;
