import { connect } from 'react-redux';
import { getPeople } from '../../actions/people';
import People from './People';

const mapStateToProps = (state) => {
  return {
    people: state.people.people,
  };
};

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(getPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(People);
