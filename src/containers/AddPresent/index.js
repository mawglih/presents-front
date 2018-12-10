import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addPresentStart
} from 'actions/presents';
import styles from './addpresents.css';

class AddPresent extends Component {
  state = {
    title: '',
    image: '',
    description: '',
    url: '',
    occasion: '',
  }

  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newPresent = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
      url: this.state.url,
      occasion: this.state.occasion,
    };
    const {
      addPresentStart,
      history,
    } = this.props;
    addPresentStart(newPresent);
    console.log(newPresent);
    history.push('/dashboard');
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
      placeholder5,
      error,
    } = this.props;
    console.log('addpresents comp error: ', error);
    const {
      title,
      image,
      description,
      url,
      occasion,
    } = this.state;
    return (
      <div className={styles.container}>
        <h1> Add present</h1>
        <div className={styles.addpresent}>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            <div className={styles.input}>
              <label>Title</label>
              <input
                name="title"
                value={title}
                type="text"
                placeholder={placeholder1}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.input}>
              <label>Image</label>
              <input
                name="image"
                value={image}
                type="text"
                placeholder={placeholder2}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.input}>
              <label>Description</label>
              <textarea
                name="description"
                rows="5"
                value={description}
                type="text"
                placeholder={placeholder3}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className={styles.input}>
              <label>URL</label>
              <input
                name="url"
                value={url}
                type="text"
                placeholder={placeholder4}
                onChange={this.handleChange}
              />
            </div>
            <div className={styles.input}>
              <label>Occasion</label>
              <input
                name="occasion"
                value={occasion}
                type="text"
                placeholder={placeholder5}
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
            <div>
              {Object.values(error).map(item => {
                return <p key={encodeURIComponent(item)}>
                  {item}
                </p>
              })}
            </div>
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
  present: state.present,
});

export default connect(mapStateToProps, { addPresentStart })(AddPresent);
