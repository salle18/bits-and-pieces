# Tail call optimisation

```
function doTaskA(a) {
    return a;
}

function doTaskB(b) {
    return doTaskA( b + 1 ); //tail call
}

function finishEverything() {
    return 100 + doTaskB(10); //not tail call
}
```

Further reading:

https://javascript.plainenglish.io/javascript-optimizations-tail-call-optimization-tco-471b4f8e4f37

https://www.educative.io/collection/page/10370001/5765283616653312/5745912240406528
