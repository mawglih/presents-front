import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {
  getPresentsStart
} from 'actions/presents';
import Present from 'components/Present';
import styles from './podarkilist.css';

class PodarkiList extends Component {
  componentDidMount() {
    const {
      getPresentsStart
    } = this.props;
    getPresentsStart();
  }

  render() {
    const {
      podarki,
    } = this.props;
    return(
      <div className={styles.container}>
        {podarki ? (
          Object.values(podarki).map(item => (
            <Present
              key={item._id}
              title={item.title}
              image={item.image}
              description={item.description}
              occasion={item.occasion}
              url={item.url}
              price={item.price}
            />
          )) 
        ) : (<h2>No presents yet</h2>)}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  podarki: state.getPresents,
});

export default connect(mapStateToProps, { getPresentsStart })(PodarkiList);
