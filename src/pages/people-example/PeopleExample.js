import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../component-library/Button';
import CardList from '../../component-library/CardList';
import PersonCard from '../../component-library/PersonCard';
import ProfileSummary from '../../components/ProfileSummary';
import { LeftColumn, RightColumn } from './styles';

class PeopleExample extends React.Component {
  state = {
    selectedPerson: undefined,
  };

  handlePersonClick = person => (e) => {
    e.stopPropagation();
    this.setState({ selectedPerson: person });
  };

  render() {
    const { selectedPerson } = this.state;

    return (
      <div>
        <LeftColumn>
          {
            selectedPerson &&
            <ProfileSummary person={selectedPerson} />
          }
        </LeftColumn>
        <RightColumn>
          <Button onClick={this.props.getPeople}>Get People</Button>
          <CardList>
            {
              this.props.people.map(person => (
                <PersonCard
                  person={person}
                  role="presentation"
                  onClick={this.handlePersonClick(person)}
                  active={person === selectedPerson}
                  lastNameFirst
                />
              ))
            }
          </CardList>
        </RightColumn>
      </div>
    );
  }
}

PeopleExample.propTypes = {
  getPeople: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
  })),
};

PeopleExample.defaultProps = {
  people: [],
};

export default PeopleExample;
