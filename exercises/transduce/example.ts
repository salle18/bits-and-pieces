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


// const isPersonOlderThan30 = person => person.age > 30;

const isPersonOlderThan = n => person => person.age > n;

const isPersonOlderThan30 = isPersonOlderThan(30);

const formatPersonFullname = person => `${person.name} ${person.lastname}`;

const log = str => console.log(str);

people.filter(isPersonOlderThan30).map(formatPersonFullname).forEach(log);


people.reduce((acc, person) => {
    if (isPersonOlderThan30(person)) {
        return [...acc, person];
    }
    return acc;
}, []);

people.reduce((acc, person) => {
    const value = formatPersonFullname(person);
    return [...acc, value];
}, []);


//a more functional version of reduce: it takes the accumulator function, initial state and data
const reduce = (accFn, initial, items) => items.reduce(accFn, initial);

// Define generalized map and filter through reduce
const mapping = mapFn => resultifierFn => 
  (acc, item) => resultifierFn(acc, mapFn(item, acc));

const filtering = predicate => resultifierFn => (acc, item) => 
  predicate(item, acc) ? resultifierFn(acc, item) : acc;


//some, er... resultifiers
const concat = (arr, value) => [...arr, value];//build up a final result
const sum = (x, y) => x+y;


// Ok... how do we call this?
reduce(filtering(isPersonOlderThan30)(concat), [], people);

// Everything is a reducer...
reduce(concat, [], people);

// Compose functions
const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const processingPipeline = compose(filtering(isPersonOlderThan30), mapping(formatPersonFullname))(concat);

console.log(reduce(processingPipeline, [], people));
