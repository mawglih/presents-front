import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addOccasionStart,
  getOccasionByIdStart
} from 'actions/profile';
import TextInput from 'common/InputComponents/TextInput';
import TextareaInput from 'common/InputComponents/TextareaInput';
import styles from './occasions.css';

class EditOccasion extends Component {
  state= {
    title: '',
    at: '',
    description: '',
    special: false,
    errors: {},
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newOccasion = {
      title: this.state.title,
      at: this.state.at,
      description: this.state.description,
      special: this.state.special,
    };

    const {
      addOccasionStart,
      history,
      match,
    } = this.props;
    console.log('new occasion is: ', newOccasion);
    console.log('id is: ', match.params.id);
    addOccasionStart(newOccasion);
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
  componentDidMount() {
    const {
      getOccasionByIdStart,
      match,
    } = this.props;
    getOccasionByIdStart(match.params.id);
  }

  render() {
    const {
      title,
      at,
      description,
      special,
    } = this.state;
    const {
      error,
      match,
    } = this.props;
    console.log('in edit occasion match: ', match.params.id);
    return(
      <div className={styles.container}>
        <h1>Edit your occasion</h1>
        <div className={styles.smallText}>
          <small>* = denote required field</small>
        </div>
        <div className={styles.addoccasion}>
        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
        >
          <TextInput
              label="* Name of your occasion"
              value={title}
              type="text"
              placeholder="Name your occasion: My birthday, etc."
              onChange={this.handleChange}
              name="title"
              error={error.title}
              info="Create a name for your occasion that is suitable for you"
            />
            <TextInput
              label="* When it will happen"
              value={at}
              type="date"
              placeholder="When this occasion will happen"
              onChange={this.handleChange}
              name="at"
              error={error.at}
              info="Select the date when you want to receive a present"
            />
            <TextareaInput
              label="Description"
              value={description}
              placeholder="Short story about your occasion"
              onChange={this.handleChange}
              name="description"
              error={error.description}
              row="8"
              info="Short description about your occasion and why you want presents for it"
            />
            <TextInput
              label="It is special occasion"
              value={special}
              type="checkbox"
              onChange={this.handleChange}
              name="special"
              error={error.special}
              info="If you want to emphasize presents for this occasion select the checkbox"
              checkbox
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

const mapStateToProps = (state) => {
  return {
    auth: state.signin,
    error: state.error,
    occasion: state.getOccasions,
  }
}

export default connect(mapStateToProps, { addOccasionStart, getOccasionByIdStart })(EditOccasion);
