import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import {
  getOccasionByIdStart,
  deleteOccasionStart,
} from 'actions/profile';
import styles from'./occasions.css';

class DeleteOccasion extends Component {

  onDelete(id) {
    const {
      deleteOccasionStart,
      history,
    } = this.props;
    deleteOccasionStart(id);
    history.push('/occasions');
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
      match,
      history,
      occasion,
    } = this.props;
    console.log('deleteocc occasion: ', occasion);
    const actionButtons = (
      <Fragment>
        <button
          type="button"
          onClick={() => history.push('/occasions')}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => this.onDelete(match.params.id)}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </Fragment>
    );

    return (
      <div className={styles.container}>
        <Modal
          title="Delete Occasion"
          text={`Do you want to delete occassion ${occasion.title} ?`}
          actionButtons={actionButtons}
          modalDismiss={() => history.push('/occasions')}
        />
      </div>
    );
  }
}

const mapStateToProps =(state) => ({
  auth: state.signin,
  occasion: state.getOccasion.occasion,
});

export default connect(
  mapStateToProps, {
    getOccasionByIdStart,
    deleteOccasionStart,
  }
)(DeleteOccasion);