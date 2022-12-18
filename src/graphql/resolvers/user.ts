const resolvers = {
  Query: {
    users: () => users,
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: () => {},
  },
}

const users = [
  {
    id: 'The Awakening',
    username: 'Kate Chopin',
  },
  {
    id: 'City of Glass',
    username: 'Paul Auster',
  },
];

export default resolvers