"use strict";

function tester(param1, param2) {

    const arr1 = [6, 23, 4, 1];

    arr1.sort(function (a, b) {
        return a - b;
    });

    console.log("testing stuff: " + arr1);
}

tester();