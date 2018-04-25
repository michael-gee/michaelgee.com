import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.value);
  }

  render() {
    return (
      <div id="homepage-container">
        <h1>ToDoList</h1>

        <form onSubmit={this.handleSubmit}>
          <input id="user-input" type="text" name="userInput" onChange={this.handleInputChange} />

          <input type="submit" value="Submit" className="homepage-btn" />
        </form>

        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

function mapStateToProps({ initial }) {
  return { initial };
}

export default connect(mapStateToProps, actions)(Home);