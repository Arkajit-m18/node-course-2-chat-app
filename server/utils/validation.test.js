const expect = require('expect');
var {isRealString} = require('./validation');

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