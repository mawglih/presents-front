import React, { Component } from 'react';
import styles from "./signin.css";

class Signin extends Component {

  state = {
    username: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      name: this.state.username,
      password: this.state.password
    };
    console.log(user);
  }

  render() {
    const {
      placeholder1,
      placeholder2,
    } = this.props;
    const {
      username,
      password,
    } = this.state;
    return(
      <div className={styles.container}>
        <div className={styles.signin}>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            <div className={styles.input}>
              <label>Username</label>
              <input
                value={username}
                type="text"
                placeholder={placeholder1}
                onChange={this.handleChange}
                name="username"
              />
            </div>
            <div className={styles.input}>
              <label>Password</label>
              <input
                name="password"
                value={password}
                type="password"
                placeholder={placeholder2}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button
                className={styles.formSubmit}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
