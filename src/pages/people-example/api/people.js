import find from 'lodash/find';

const makePeople = () => [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Abernathy',
    address: '123 Any Street',
    profilePicture: 'https://i.redd.it/p0vziefbgw431.jpg',
    occupation: 'Software Developer',
    stand: 'Star Platinum'
  },
  {
    id: 2,
    firstName: 'Bill',
    lastName: 'Brooks',
    address: '456 Busy Boulevard',
    profilePicture: 'https://i.redd.it/x2bgwxc14ec21.jpg',
    occupation: 'Math Teacher',
    stand: 'Cheap Trick',
  },
  {
    id: 3,
    firstName: 'Charlie',
    lastName: 'C',
    address: '789 City Center',
    profilePicture: 'https://i.redd.it/a2qypdde5ub21.jpg',
    occupation: 'Intergalactic Bounty Hunter',
    stand: 'Wheel of Fortune',
  },
];

export const getPeople = () => {
  const people = makePeople();

  return Promise.resolve(people);
}

export const getPerson = (query) => {
  const person = find(makePeople(), query);

  return Promise.resolve(person);
};
