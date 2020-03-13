"use strict";

const printName = (function () {
    function printNameInner(name) {
        console.log(name);
    }

    return printNameInner;
})();
printName("Tom");          
//result: Tom

//or in one fell swoop
(function (name) {
    console.log(name);
})("Tom")                  
//result: Tom

function traverseArray(arr, func) {
    let result = '';
    for (const value of arr) {
        result += func(value) + ' ';
    }
    console.log(result);
}

const arr = [1, 2, 3, 4, 5];
const doubler = value => value * 2;////alternatively, can be written verbosely as
//const doubler = (value) => {
//    return value * 2;
//}

traverseArray(arr, doubler);      
//result: 2 4 6 8 10 