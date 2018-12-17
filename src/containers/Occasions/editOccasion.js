import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  editOccasionStart,
  getOccasionByIdStart
} from 'actions/profile';
import TextInput from 'common/InputComponents/TextInput';
import TextareaInput from 'common/InputComponents/TextareaInput';
import isEmpty from 'utils/isEmpty';
import styles from './occasions.css';

class EditOccasion extends Component {
  state= {
    title: '',
    at: '',
    description: '',
    special: false,
    errors: {},
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newOccasion = {
      title: this.state.title,
      at: this.state.at,
      description: this.state.description,
      special: this.state.special,
    };

    const {
      editOccasionStart,
      history,
      match,
    } = this.props;
    console.log('new occasion is: ', newOccasion);
    console.log('id is: ', match.params.id);
    editOccasionStart(newOccasion);
    history.push('/dashboard');
  };

  convertDate = (input) => {
    let date = new Date(input);
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 101).toString().substring(1);
    let day = (date.getDate() + 100).toString().substring(1);
    return year + "-" + month + "-" + day;
  }
  
  componentWillReceiveProps(nextProps) {
    const {
      history,
      error
    } = this.props;
    if (nextProps.user && error === null) {
      history.push('/signin');
    }
    if(nextProps.occasionById) {
      const occasion = nextProps.occasionById;
      occasion.at = !isEmpty(occasion.at) ? occasion.at : '';
      occasion.description = !isEmpty(occasion.description) ? occasion.description : '';
      occasion.special = !isEmpty(occasion.special) ? occasion.special : false;
      occasion.title = !isEmpty(occasion.title) ? occasion.title : '';
      this.setState({
        title: occasion.title,
        at: this.convertDate(occasion.at),
        description: occasion.description,
        special: occasion.special,
      });
    }
  }

  componentDidMount() {
    const {
      getOccasionByIdStart,
      match,
    } = this.props;
    console.log('in edit CDM occasion match: ', match.params.id);
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
      // occasionById,
      // occ,
    } = this.props;
    // console.log('in edit occasion occasion by id: ', occ);
    // console.log('in edit occasion loading: ', loading);
    // console.log('in edit occasion occasion by id: ', occ);
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
                Update
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
    // occasion: state.getOccasions,
    occasionById: state.getOccasion.occasion,
  }
}

export default connect(mapStateToProps, { editOccasionStart, getOccasionByIdStart })(EditOccasion);
