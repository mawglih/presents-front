import React, { Component } from 'react';
import cn from 'classname';
import TextInput from 'common/InputComponents/TextInput';
import TextareaInput from 'common/InputComponents/TextareaInput';
import SelectInput from 'common/InputComponents/SelectInput';
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
    price: 0,
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
      price: this.state.price,
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
    const Occasions = [
      {name: 'For My Birthday', value: 'birthday'},
      {name: 'New Year Present', value: 'newyear'},
      {name: 'For my wedding', value: 'wedding'},
      {name: 'For my weeding anniversary', value: 'anniversary'},
      {name: 'For Hanuka', value: 'hanuka'},
      {name: 'Because I am good', value: 'good'},
      {name: 'I want a present', value: 'other'},
    ]
    const {
      error,
    } = this.props;
    const {
      title,
      image,
      price,
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
            className={cn(
              styles.form,
              Object.keys(error).length > 0 ? styles.formInvalid : null,
            )}
          >
            <TextInput
              label="Title"
              value={title}
              type="title"
              placeholder="Your present title"
              onChange={this.handleChange}
              name="title"
              error={error.title}
            />
            <TextInput
              label="Image"
              value={image}
              type="text"
              placeholder="Link to the image of the present"
              onChange={this.handleChange}
              name="image"
              error={error.image}
            />
            <TextInput
              label="Price"
              value={price}
              type="number"
              placeholder="Approximate price of the present"
              onChange={this.handleChange}
              name="price"
              error={error.price}
            />
            <TextareaInput
              label="Description"
              value={description}
              placeholder="Your present description"
              onChange={this.handleChange}
              name="description"
              error={error.description}
            />
            <TextInput
              label="URL to store"
              value={url}
              type="text"
              placeholder="Enter url to purchase a present"
              onChange={this.handleChange}
              name="url"
              error={error.url}
            />
            <SelectInput
              label="Occasion"
              value={occasion}
              placeholder="Select your occasion"
              onChange={this.handleChange}
              name="occasion"
              error={error.occasion}
              options={Occasions}
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
  present: state.present,
});

export default connect(mapStateToProps, { addPresentStart })(AddPresent);
