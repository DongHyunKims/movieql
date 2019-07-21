const people = [
    {
        id: 1,
        name: "Alex",
        age: 30,
        gender: "male"
    },
    {
        id: 2,
        name: "Alex",
        age: 30,
        gender: "male"
    },
    {
        id: 3,
        name: "Alex",
        age: 30,
        gender: "male"
    },
    {
        id: 4,
        name: "Alex",
        age: 30,
        gender: "male"
    }
];

const getById = ({ id }) => {
    const foundPerson = people.filter(val => {
        return val.id === id;
    });

    return foundPerson[0];
};

const resolvers = {
  Query: {
    people: () => {
      return people;
    },
    person: (_, id) => {
        return getById(id);
    }
  }
};

export default resolvers;
