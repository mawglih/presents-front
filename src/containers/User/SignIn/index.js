import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinStart } from 'actions';
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
    if (auth.isAuthenticated) {
      history.push('/');
    }
  } 

  componentWillReceiveProps(nextProps) {
    const {
      history,
    } = this.props;
    if (nextProps.auth.isAuthenticated) {
      history.push('/');
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
    const {
      placeholder1,
      placeholder2,
    } = this.props;
    const {
      email,
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
              <label>Email</label>
              <input
                value={email}
                type="text"
                placeholder={placeholder1}
                onChange={this.handleChange}
                name="email"
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

const mapStateToProps = state => ({
  auth: state.signin,
});

export default connect(mapStateToProps, { signinStart })(Signin);
