import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
  getPresentsStart,
  getPresentsByUserStart,
} from 'actions/presents';
import Present from 'components/Present';
import styles from './podarkilist.css';

class PodarkiList extends Component {
  componentDidMount() {
    const {
      getPresentsStart,
      getPresentsByUserStart,
      user,
    } = this.props;
    getPresentsStart();
    getPresentsByUserStart(user.id);
  }

  render() {
    const {
      // podarki,
      user,
      podarkiUser,
    } = this.props;
    console.log('podarki list userid: ', user.id);
    console.log('podarki for userid: ', podarkiUser);
    return(
      <div className={styles.container}>
        {podarkiUser ? (
          podarkiUser.map(item => (
            <Present
              key={item._id}
              id={item._id}
              title={item.title}
              image={item.image}
              description={item.description}
              occasion={item.occasion}
              url={item.url}
              price={item.price}
              // date={getItemDate(item.occasion)}
            />
          )) 
        ) : (<h2>No presents yet</h2>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  podarki: state.getPresents.presents,
  user: state.signin.user,
  podarkiUser: state.getPresents.presentsByUser,
});

export default connect(mapStateToProps, {
  getPresentsStart, 
  getPresentsByUserStart,
})(PodarkiList);
