"use strict";

const arr1 = [6, 23, 4, 1, 2];
const arr2 = [1, 2, 3, 4];

function tester(param1, param2) {

    arr1.sort(function (a, b) {
        return a - b;
    });

    console.log(`testing stuff: ${arr1}`);

    let searchVal = arr1.indexOf(6);

    console.log(searchVal);

    arr1[searchVal] = 7;

    console.log(arr1);
}

function testMap() {

    console.log(`Array before map: ${arr2}`);

    let modifiedArr = arr2.map(function (n) {
        return n + 1;
    });
    console.log(`Array after map: ${modifiedArr}`)
}

tester();
testMap();