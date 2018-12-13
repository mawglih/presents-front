import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  createProfileStart,
  getProfileStart,
} from 'actions/profile';
import isEmpty from 'utils/isEmpty';
import TextInput from 'common/InputComponents/TextInput';
import SelectInput from 'common/InputComponents/SelectInput';
import TextareaInput from 'common/InputComponents/TextareaInput';
import TextInputGroup from 'common/InputComponents/TextInputGroup';
import facebookSVG from './SvgIcons/facebook2.svg';
import instagramSVG from './SvgIcons/instagram.svg';
import linkedinSVG from './SvgIcons/linkedin.svg';
import twitterSVG from './SvgIcons/twitter.svg';
import youtubeSVG from './SvgIcons/video-camera.svg';
import styles from './profile.css';

class EditProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    statusP: '',
    skills: '',
    skillLevel: '',
    bio: '',
    githubusername: '',
    facebook: '',
    youtube: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    errors: {},
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
      statusP: this.state.statusP,
      skills: this.state.skills,
      skillLevel: this.state.skillLevel,
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
    console.log('new profile is: ', newProfile);
    createProfileStart(newProfile);
    history.push('/dashboard');
  }

  componentWillReceiveProps(nextProps) {
    const {
      history,
      error,
    } = this.props;
    if(nextProps.user && error === null) {
      history.push('/signin');
    }
    if(nextProps.profile.current) {
      const profile = nextProps.profile.current;
      console.log('editprofile const profile: ', profile);
      const skillsCSV = profile.skills.join(',');
      profile.company = !isEmpty(profile.company) ?  profile.company : '';
      profile.website = !isEmpty(profile.website) ?  profile.website : '';
      profile.location = !isEmpty(profile.location) ?  profile.location : '';
      profile.statusP = !isEmpty(profile.statusP) ?  profile.statusP : '';
      profile.skillLevel = !isEmpty(profile.skillLevel) ?  profile.skillLevel : '';
      profile.bio = !isEmpty(profile.bio) ?  profile.bio : '';
      profile.githubusername = !isEmpty(profile.githubusername) ?  profile.githubusername : '';
      profile.social = !isEmpty(profile.social) ?  profile.social : {};
      profile.facebook = !isEmpty(profile.social.facebook) ?  profile.social.facebook : '';
      profile.youtube = !isEmpty(profile.social.youtube) ?  profile.social.youtube : '';
      profile.twitter = !isEmpty(profile.social.twitter) ?  profile.social.twitter : '';
      profile.linkedin = !isEmpty(profile.social.linkedin) ?  profile.social.linkedin : '';
      profile.instagram = !isEmpty(profile.social.instagram) ?  profile.social.instagram : '';
      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        statusP: profile.statusP,
        skills: skillsCSV,
        skillLevel: this.state.skillLevel,
        bio: profile.bio,
        githubusername: profile.githubusername,
        facebook: profile.facebook,
        youtube: profile.youtube,
        twitter: profile.twitter,
        linkedin: profile.linkedin,
        instagram: profile.instagram,
      });
    }
  }

  componentDidMount() {
    const {
      getProfileStart
    } = this.props;
    getProfileStart();
  }

  render() {
    const StatusP = [
      {name: 'Select your employment status', value: 0},
      {name: 'Employed', value: 'employed'},
      {name: 'Unemployed', value: 'unemployed'},
      {name: 'Student', value: 'student'},
      {name: 'Married with children', value: 'married'},
    ];
    const Skills = [
      {name: 'Select your skill level', value: 0},
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
    console.log('editprofile comp error: ', error);
    const {
      handle,
      company,
      website,
      location,
      statusP,
      skills,
      skillLevel,
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
        <h1> Edit profile</h1>
        <div className={styles.smallText}>
          <small>* = denote required field</small>
        </div>
        <div className={styles.addprofile}>
          <form
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            <TextInput
              label="* Handle"
              value={handle}
              type="text"
              placeholder="Create your handle"
              onChange={this.handleChange}
              name="handle"
              error={error.handle}
              info="Create a handle by which your profile can be recognized"
            />
            <TextInput
              label="Company"
              value={company}
              type="text"
              placeholder="What is your company name"
              onChange={this.handleChange}
              name="company"
              error={error.company}
              info="Where are you working currently"
            />
            <TextInput
              label="Website"
              value={website}
              type="text"
              placeholder="Type in your website"
              onChange={this.handleChange}
              name="website"
              error={error.website}
              info="If you have a website provide the name for it"
            />
            <TextInput
              label="* Location"
              value={location}
              type="text"
              placeholder="Where are you located"
              onChange={this.handleChange}
              name="location"
              error={error.location}
              info="Where are you currenly located?"
            />
            <SelectInput
              label="* Status"
              value={statusP}
              onChange={this.handleChange}
              name="statusP"
              error={error.statusP}
              options={StatusP}
              info="What is you employment statusP or statusP in life?"
            />
            <TextareaInput
              label="Bio"
              value={bio}
              placeholder="Short story about you"
              onChange={this.handleChange}
              name="bio"
              error={error.bio}
              row="10"
              info="Short Bio about yourself or your cat"
            />
            <TextInput
              label="Your Skills"
              value={skills}
              type="text"
              placeholder="Type skills, separated by comma"
              onChange={this.handleChange}
              name="skills"
              error={error.skills}
              info="SHow here what you know"
            />
            <SelectInput
              label="Your professional level"
              value={skillLevel}
              onChange={this.handleChange}
              name="skills"
              error={error.skillLevel}
              options={Skills}
              info="Select your skill level if you better than ape"
            />
            <TextInput
              label="Github Username"
              value={githubusername}
              type="text"
              placeholder="Your github username"
              onChange={this.handleChange}
              name="githubusername"
              error={error.githubusername}
              info="Do not know what it is? Do not bother, just downgrade your skill level from above"
            />
            <TextInputGroup
              icon={facebookSVG}
              label="Facebook handle"
              value={facebook}
              type="text"
              placeholder="What is your facebook handle"
              onChange={this.handleChange}
              name="facebook"
              error={error.facebook}
              info="If you do not have one nobody will punish you"
            />
            <TextInputGroup
              icon={youtubeSVG}
              label="Youtube profile"
              value={youtube}
              type="text"
              placeholder="What is your youtube handle"
              onChange={this.handleChange}
              name="youtube"
              error={error.youtube}
              info="If you do not have one nobody will punish you"
            />
            <TextInputGroup
              icon={twitterSVG}
              label="Twitter handle"
              value={twitter}
              type="text"
              placeholder="What is your twitter handle"
              onChange={this.handleChange}
              name="twitter"
              error={error.twitter}
              info="If you do not have one nobody will punish you"
            />
            <TextInputGroup
              icon={linkedinSVG}
              label="Linkedin profile"
              value={linkedin}
              type="text"
              placeholder="What is your linkedin handle"
              onChange={this.handleChange}
              name="linkedin"
              error={error.linkedin}
              info="If you do not have one nobody will punish you"
            />
            <TextInputGroup
              icon={instagramSVG}
              label="Instagram username"
              value={instagram}
              type="text"
              placeholder="What is your instagram handle"
              onChange={this.handleChange}
              name="instagram"
              error={error.instagram}
              info="If you do not have one nobody will punish you"
            />
            <div>
              <button
                className={styles.formSubmit}
                type="submit"
              >
                Update profile
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
    profile: state.profile,
  }
}

export default connect(mapStateToProps, { createProfileStart, getProfileStart })(EditProfile);
