
function receivesAFunction(cb) {
    cb();
}

function returnsAnAnonymousFunction() {
   return (function(){});
}

function returnsANamedFunction() {
    const namedFn = () => console.log("this is a named function")
    return namedFn;
 }