import React,{ Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getPresentsByUserStart,
} from 'actions/presents';
import PresentItem from './presentSingle';
// import styles from './profiles.css';

class PodarkiPublic extends Component {

  

  render() {
    const {
      podarkiUser,
      user,
    } = this.props;
    console.log('podarki for userid: ', podarkiUser);
    return(
      <Fragment>
        {podarkiUser ? (
          podarkiUser.map(item => (
            <PresentItem
              key={item._id}
              id={item._id}
              title={item.title}
              image={item.image}
              description={item.description}
              occasion={item.occasion}
              url={item.url}
              price={item.price}
              userid={item.user._id}
              user={user}
              // date={getItemDate(item.occasion)}
            />
          )) 
        ) : (<h2>No presents yet</h2>)}
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  podarkiUser: state.getPresents.presentsByUser,
  user: state.signin.user,
});

export default connect(mapStateToProps, {
  getPresentsByUserStart,
})(PodarkiPublic);
