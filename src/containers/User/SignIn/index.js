import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinStart } from 'actions';
import cn from 'classname';
import TextInput from 'common/InputComponents/TextInput';
import styles from "./signin.css";

class Signin extends Component {

  state = {
    email: '',
    password: '',
  };

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
    } = this.props;
    if (nextProps.auth) {
      history.push('/dashboard');
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    const {
      signinStart,
    } = this.props;
    signinStart(user);
    console.log(user);
  }

  render() {
    console.log('token: ', localStorage.jwtToken);
    const {
      error,
    } = this.props;
    console.log('signin errror: ', error);
    const {
      email,
      password,
    } = this.state;
    return(
      <div className={styles.container}>
        <div className={styles.signin}>
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
              label="Password"
              value={password}
              type="password"
              placeholder="Your password"
              onChange={this.handleChange}
              name="password"
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
  auth: state.signin.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { signinStart })(Signin);
