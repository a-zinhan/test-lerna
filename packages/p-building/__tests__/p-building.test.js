const { makeBuilding } = require("../dist/p-building.js");

test('make Buildning', () => {
    expect(makeBuilding(5)).toContain('5 floors');
});