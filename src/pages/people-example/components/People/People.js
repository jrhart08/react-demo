import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../component-library/Button';
import CardList from '../../../../component-library/CardList';
import PersonCard from '../../../../component-library/PersonCard';
import {
  Context as CollapseContext,
  CollapseLine,
  ViewAll,
} from '../../../../component-library/collapsibles';
import ProfileSummary from '../ProfileSummary';
import { LeftColumn, RightColumn } from './styles';


class PeopleExample extends React.Component {
  state = {
    selectedPerson: undefined,
  };

  handlePersonClick = person => (e) => {
    e.stopPropagation();
    this.setState({ selectedPerson: person });
  };

  renderPersonCards = (people) => (
    <CardList>
      {
        people.map(person => (
          <PersonCard
            key={person.id}
            person={person}
            role="presentation"
            onClick={this.handlePersonClick(person)}
            active={person === this.state.selectedPerson}
            lastNameFirst
          />
        ))
      }
    </CardList>
  );

  render() {
    const { selectedPerson } = this.state;

    return (
      <CollapseContext.Provider>
        <LeftColumn>
          {
            selectedPerson &&
            <ProfileSummary person={selectedPerson} />
          }
        </LeftColumn>
        <RightColumn>
          <Button onClick={this.props.getPeople}>Get People</Button>
          <ViewAll />
          <CollapseContext.Consumer>
            {
              (context) => {
                const people = context.collapsed
                  ? this.props.people.slice(0, 1)
                  : this.props.people;
                
                return this.renderPersonCards(people);
              }
            }
          </CollapseContext.Consumer>
          <CollapseLine />
        </RightColumn>
      </CollapseContext.Provider>
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
