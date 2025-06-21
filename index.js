function receivesAFunction(callback) {
    callback()
}
function   returnsANamedFunction() {
    function named(){
        console.log("This a named function")
    }
    return named;
}
function returnsAnAnonymousFunction() {
   return function (){
        console.log("This is an anonymous function")
    };
    
}