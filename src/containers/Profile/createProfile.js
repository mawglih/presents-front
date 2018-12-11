import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProfileStart } from 'actions/profile';
import TextInput from 'common/InputComponents/TextInput';
import SelectInput from 'common/InputComponents/SelectInput';
import TextareaInput from 'common/InputComponents/TextareaInput';
import styles from './profile.css';

class CreateProfile extends Component {
  state = {
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    bio: '',
    githubusername: '',
    facebook: '',
    youtube: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  }

  
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newProfile = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      bio: this.state.bio,
      githubusername: this.state.githubusername,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram,
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
    const Status = [
      {name: 'Employed', value: 'employed'},
      {name: 'Unemployed', value: 'unemployed'},
      {name: 'Student', value: 'student'},
      {name: 'Married with children', value: 'married'},
    ];
    const Skills = [
      {name: 'I do not know anything', value: 'idiot'},
      {name: 'I am just starting', value: 'junior'},
      {name: 'I have a little experinece', value: 'juniorplust'},
      {name: 'I have good experience', value: 'professional'},
      {name: 'I am an expert', value: 'expert'},
      {name: 'I am powerfull god', value: 'superidiot'},
    ];
    const {
      error,
    } = this.props;
    console.log('addpresents comp error: ', error);
    const {
      handle,
      company,
      website,
      location,
      status,
      skills,
      bio,
      githubusername,
      facebook,
      youtube,
      twitter,
      linkedin,
      instagram,
    } = this.state;
    return (
      <div className={styles.container}>
        <h1> Add profile</h1>
        <div className={styles.addprofile}>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            <TextInput
              label="Handle"
              value={handle}
              type="text"
              placeholder="Create your handle"
              onChange={this.handleChange}
              name="handle"
              error={error.handle}
            />
            <TextInput
              label="Company"
              value={company}
              type="text"
              placeholder="What is your company name"
              onChange={this.handleChange}
              name="company"
              error={error.company}
            />
            <TextInput
              label="Website"
              value={website}
              type="text"
              placeholder="Type in your website"
              onChange={this.handleChange}
              name="website"
              error={error.website}
            />
            <TextInput
              label="Location"
              value={location}
              type="text"
              placeholder="Where are you located"
              onChange={this.handleChange}
              name="location"
              error={error.location}
            />
            <SelectInput
              label="Status"
              value={status}
              placeholder="Select your status"
              onChange={this.handleChange}
              name="status"
              error={error.status}
              options={Status}
            />
            <TextareaInput
              label="Bio"
              value={bio}
              placeholder="Short story about you"
              onChange={this.handleChange}
              name="bio"
              error={error.bio}
            />
            <SelectInput
              label="Your skills"
              value={skills}
              placeholder="Select your skill level"
              onChange={this.handleChange}
              name="skills"
              error={error.skills}
              options={Skills}
            />
            <TextInput
              label="Github Username"
              value={githubusername}
              type="text"
              placeholder="Your github username"
              onChange={this.handleChange}
              name="githubusername"
              error={error.githubusername}
            />
            <TextInput
              label="Facebook handle"
              value={facebook}
              type="text"
              placeholder="What is your facebook handle"
              onChange={this.handleChange}
              name="facebook"
              error={error.facebook}
            />
            <TextInput
              label="Youtube profile"
              value={youtube}
              type="text"
              placeholder="What is your youtube handle"
              onChange={this.handleChange}
              name="youtube"
              error={error.youtube}
            />
            <TextInput
              label="Twitter handle"
              value={twitter}
              type="text"
              placeholder="What is your twitter handle"
              onChange={this.handleChange}
              name="twitter"
              error={error.twitter}
            />
            <TextInput
              label="Linkedin profile"
              value={linkedin}
              type="text"
              placeholder="What is your linkedin handle"
              onChange={this.handleChange}
              name="linkedin"
              error={error.linkedin}
            />
            <TextInput
              label="Instagram username"
              value={instagram}
              type="text"
              placeholder="What is your instagram handle"
              onChange={this.handleChange}
              name="instagram"
              error={error.instagram}
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
  }
}

export default connect(mapStateToProps, { createProfileStart })(CreateProfile);
