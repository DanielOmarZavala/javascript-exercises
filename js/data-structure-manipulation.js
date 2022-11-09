"use strict";

function tester(param1, param2) {

    const arr1 = [6, 23, 4, 1, 2];

    arr1.sort(function (a, b) {
        return a - b;
    });

    console.log("testing stuff: " + arr1);

    let searchVal = arr1.indexOf(6);

    console.log(searchVal);

    arr1[searchVal] = 7;

    console.log(arr1);
}

tester();