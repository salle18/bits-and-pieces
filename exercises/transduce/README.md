# Transducers

A transducer is a composable higher-order reducer. It takes a reducer as input, and returns another reducer.

reducer = (accumulator, current) => accumulator
transducer = reducer => reducer

Further reading:

https://jrsinclair.com/articles/2019/magical-mystical-js-transducers/
https://medium.com/javascript-scene/transducers-efficient-data-processing-pipelines-in-javascript-7985330fe73d
https://medium.com/@dtipson/everything-reduced-transducers-in-javascript-8ea3459bc7f9
