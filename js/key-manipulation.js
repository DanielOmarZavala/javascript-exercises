"use strict";

const hasPaid = {
    'bob': true,
    'jane': false,
    'rick': true
}

/**
     * @type {{customer: *}[]}
     * Initializes variable with manipulated keys
 **/
const objs = Object.keys(hasPaid)
    .map(customer => ({
        customer
    }));

console.log(objs);