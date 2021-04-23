console.log("load script");

setTimeout(() => {
  queueMicrotask(() => console.log("Queue microtask inside of promise"));
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => console.log("Resolve immediate promise"));

queueMicrotask(() => {
  console.log("queueMicrotask immediately");
  queueMicrotask(() => console.log("queueMicrotask inside queueMicrotask"));
  setTimeout(() => console.log("setTimeout inside queueMicrotask"), 0);
});

console.log("end script");
