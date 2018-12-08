import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupStart } from 'actions';
import styles from "./signup.css";

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    const {
      signupStart,
    } = this.props;
    signupStart(newUser);
    console.log(newUser);
  }

  componentDidMount() {
    const {
      auth,
      history,
    } = this.props;
    if (auth) {
      history.push('/dashboard');
    }
  } 

  componentWillReceiveProps(nextProps) {
    const {
      history,
      error
    } = this.props;
    if (nextProps.user && error === null) {
      history.push('/signin');
    }
  }

  render() {
    const {
      placeholder1,
      placeholder2,
      placeholder3,
      placeholder4,
      error,
    } = this.props;
    const {
      username,
      password,
      password2,
      email,
    } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.signup}>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            <div className={styles.input}>
              <label>Email</label>
              <input
                name="email"
                value={email}
                type="email"
                placeholder={placeholder1}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.input}>
              <label>Username</label>
              <input
                name="username"
                value={username}
                type="text"
                placeholder={placeholder2}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.input}>
              <label>Password</label>
              <input
                name="password"
                value={password}
                type="password"
                placeholder={placeholder3}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.input}>
              <label>Password repeat</label>
              <input
                name="password2"
                value={password2}
                type="password"
                placeholder={placeholder4}
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
          {Object.values(error).length > 0 ? (
            <ul>
              {Object.values(error).map(item => {
                return <li key={encodeURIComponent(item)}>
                  {item}
                </li>
              })}
            </ul>
          ) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.signup.user,
  error: state.error,
  auth: state.signin.isAuthenticated,
});

export default connect(mapStateToProps, { signupStart })(Signup);
