const resolvers = {
  Query: {
    users: () => users,
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: { username: string }, context: any) => {
      const { username } = args
      console.log('HERE AT THE API', username)
      console.log(context)
    },
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