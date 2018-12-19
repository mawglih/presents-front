import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getPresentsStart } from 'actions/presents';

class NumberOfPresents extends Component {
  componentDidMount() {
    const {
      getPresentsStart,
    } = this.props;
    getPresentsStart();
  }
  calculate(id) {
    if(this.props.presents) {
      const length = this.props.presents.filter(item => item.user === id).length;
      return length;
    }
  }
  render() {
    const {
      id,
    } = this.props;
    return(
      <Fragment>
        {this.calculate(id)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  presents: state.getPresents.presents,
});

export default connect(mapStateToProps, { getPresentsStart })(NumberOfPresents);
