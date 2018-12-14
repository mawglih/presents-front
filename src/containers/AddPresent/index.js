import React, { Component } from 'react';
import cn from 'classname';
import TextInput from 'common/InputComponents/TextInput';
import TextareaInput from 'common/InputComponents/TextareaInput';
import SelectInput from 'common/InputComponents/SelectInput';
import { connect } from 'react-redux';
import {
  addPresentStart
} from 'actions/presents';
import {
  getProfileStart,
  getOccasionStart,
} from 'actions/profile';
import styles from './addpresents.css';
import { PulseLoader } from 'react-spinners';

class AddPresent extends Component {
  state = {
    title: '',
    image: '',
    description: '',
    url: '',
    occasion: '',
    price: 0,
    date: null,
    error: {},
  }
  
  componentDidMount() {
    const {
      getProfileStart,
      getOccasionStart,
    } = this.props;
    getOccasionStart();
    getProfileStart();
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
      date: this.state.date,
    };
    const {
      addPresentStart,
      history,
      error,
    } = this.props;
    addPresentStart(newPresent);
    console.log(newPresent);
    if(Object.keys(error).length === 0) {
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
      occasions,
      loading,
      error,
    } = this.props;
    console.log('in add present: ', occasions);
    const {
      title,
      image,
      price,
      description,
      url,
      occasion,
    } = this.state;
    let Occasions = [
      {name: 'Select an occasion for your present', value: 0, date: null, special: false},
    ];
    if(occasions != null) {
      occasions.map(item => {
        let name = item.title;
        let value = item.title;
        let date = item.at;
        let special = item.special;
        return Occasions.push({name, value, date, special})
      });
    }

    return (
      <div className={styles.container}>
        <h1> Add present</h1>
        {loading ? (
          <PulseLoader
            margin="10px"
            color={'rgb(10, 49, 31)'}
            size={50}
          />
        ) : (
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
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.signup.user,
  error: state.error,
  auth: state.signin.isAuthenticated,
  present: state.present,
  profile: state.profile.current,
  loading: state.profile.loading,
  occasions: Object.values(state.getOccasion.occasions),
});

export default connect(mapStateToProps, { addPresentStart, getProfileStart, getOccasionStart })(AddPresent);
