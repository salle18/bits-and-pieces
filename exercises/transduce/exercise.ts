// Use reduce to run asynchronous functions in sequence

const networkRequest1 = () => Promise.resolve(100);
const networkRequest2 = () => Promise.resolve(200);
const networkRequest3 = () => Promise.resolve(300);


[networkRequest1, networkRequest2, networkRequest3].reduce(/** TODO */);


// Using transducers from example sum all even numbers larger than 100

const numbers = [2, 550, 142, 97, 102, 75];
