import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateProfile extends Component {
  state = {

  }
  render() {
    return (
      <div>
        CreateProfile
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    prop: state.prop
  }
}

export default connect(mapStateToProps)(CreateProfile);
