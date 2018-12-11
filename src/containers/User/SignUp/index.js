import React, { Component } from 'react';
import cn from 'classname';
import { connect } from 'react-redux';
import { signupStart } from 'actions';
import TextInput from 'common/InputComponents/TextInput';
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
            className={cn(
              styles.form,
              Object.keys(error).length > 0 ? styles.formInvalid : null,
            )}
          >
            <TextInput
              label="Email"
              value={email}
              type="email"
              placeholder="Your email address"
              onChange={this.handleChange}
              name="email"
              error={error.email}
            />
            <TextInput
              label="Username"
              value={username}
              type="text"
              placeholder="Your usernaem"
              onChange={this.handleChange}
              name="username"
              error={error.name}
            />
            <TextInput
              label="Password"
              value={password}
              type="password"
              placeholder="Your password"
              onChange={this.handleChange}
              name="password1"
              error={error.password}
            />
            <TextInput
              label="Password Confirm"
              value={password2}
              type="password"
              placeholder="Retype your password"
              onChange={this.handleChange}
              name="password2"
              error={error.password}
            />
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

const mapStateToProps = state => ({
  user: state.signup.user,
  error: state.error,
  auth: state.signin.isAuthenticated,
});

export default connect(mapStateToProps, { signupStart })(Signup);
