/* eslint-disable import/no-unresolved */
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
      comment: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(fieldName, fieldValue) {
    this.setState({[fieldName]: fieldValue });
  }

  render() {
    return (
      <div className="bloc">
        <div>
          <label htmlFor="lastName">My lastName: </label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={(e)=> this.handleChange("lastName",e.target.value)}
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="firstName">My firstName: </label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e)=> this.handleChange("firstName",e.target.value)}
          />
          <br />
          <br />
        </div>

        <div>
          <label htmlFor="email">My email: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={(e)=> this.handleChange("email",e.target.value)}
          />
          <br />
          <br />
        </div>

        <div>
        
          <label htmlFor="comment">You can leave your comments here: </label>
          <textarea name="comment" onChange={(e)=> this.handleChange("comment",e.target.value)} value={this.state.comment}/>
          <br />
          <br />
        </div>

        <button className="button">Send</button>
      </div>
    );
  }
}
export default Contact;
