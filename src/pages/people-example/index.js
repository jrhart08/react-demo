import { connect } from 'react-redux';
import { getPeople } from '../../actions/people';
import PeopleExample from './PeopleExample';

const mapStateToProps = (state) => {
  return {
    people: state.people.people,
  };
};

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(getPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleExample);
