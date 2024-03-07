'use strict';

const { makeStreet } = require("../dist/p-street.js");
const assert = require('assert').strict;


test('make Buildning', () => {
    const street = makeStreet(11, 2);
    console.log('street:', street);

    expect(street).toContain(`street with 11`);
    expect(street).toContain(`2 floors`);
});

console.info('makeStreet tests passed');



