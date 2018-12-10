import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProfileStart } from 'actions/profile';
import styles from './profile.css';

class CreateProfile extends Component {
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
    const newProfile = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
      url: this.state.url,
      occasion: this.state.occasion,
    };
    const {
      createProfileStart,
      history,
    } = this.props;
    createProfileStart(newProfile);
    console.log(newProfile);
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
        <h1> Add profile</h1>
        <div className={styles.addprofile}>
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prop: state.prop
  }
}

export default connect(mapStateToProps, { createProfileStart })(CreateProfile);
