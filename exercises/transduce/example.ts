const people = [
    {
        name: 'Jet',
        lastname: 'Li',
        age: 45
    },
    {
        name: "Jackie",
        lastname: "Chen",
        age: 48
    },
    {
        name: "Bruce",
        lastname: 'Lee',
        age: 29
    }
];

// Print out the name and lastname of actors older than 30

people.filter(person => person.age > 30).map(person => `${person.name} ${person.lastname}`).forEach(fullname => console.log(fullname));
