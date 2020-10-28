/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="lastName">My lastName: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="firstName">My firstName: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="email">My email: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="comment">You can leave your comments here: </label>
          <textarea name="comment" />
          <br />
          <br />
        </div>

        <button>Send</button>
      </div>
    );
  }
}
export default Contact;
