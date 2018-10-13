const expect = require('expect');
var {isRealString, isActive} = require('./validation');

describe('isRealString', () => {

    it ('should reject non-string values', () => {
        var string = 123;
        var bool = isRealString(string);
        expect(bool).toBe(false);
    });

    it ('should reject string with only spaces', () => {
        var string = '   ';
        var bool = isRealString(string);
        expect(bool).toBe(false);
    });

    it ('should reject string with only spaces', () => {
        var string = '   Arkajit Mondal ';
        var bool = isRealString(string);
        expect(bool).toBe(true);
    });
});

describe('isActive', () => {

    it ('should return true if name is present', () => {
        var name = 'Arkajit';
        var namesArray = [{
            name: 'Andrew'
        }, {
            name: 'Adam'
        }, {
            name: 'Arkajit'
        }];
        var bool = isActive(name, namesArray);
        expect(bool).toBe(true);
    });

    it ('should return false if name is not present', () => {
        var name = 'Jen';
        var namesArray = [{
            name: 'Andrew'
        }, {
            name: 'Adam'
        }, {
            name: 'Arkajit'
        }];
        var bool = isActive(name, namesArray);
        expect(bool).toBe(false);
    });
});