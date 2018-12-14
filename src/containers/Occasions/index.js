import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOccasionStart } from 'actions/profile';
import Occasion from 'components/Occasion';
import { ScaleLoader } from 'react-spinners';
import styles from './occasions.css';

class Occasions extends Component {
  componentDidMount() {
    const {
      getOccasionStart,
    } = this.props;
    getOccasionStart();
  }

  render() {
    const {
      occasion,
    } = this.props;
    let OccasionItems;
    if(occasion.occasions === null || occasion.loading) {
      OccasionItems = (
      <ScaleLoader
        margin="4px"
        color={'#00008b'}
        height={70}
        width={8}
        radius={8}
      />);
    } else {
      OccasionItems = (
      Object.values(occasion.occasions).map(item => {
        return (
          <Occasion
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            date={item.at}
          />
        )}));
    }
    return (
      <div className={styles.container}>
        <h1>To edit click on occasion name</h1>
        <div className={styles.content}>
          {OccasionItems}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  occasion: state.getOccasion,
});

export default connect(mapStateToProps, { getOccasionStart } )(Occasions);

