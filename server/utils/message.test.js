var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it ('should generate the correct message object', () => {
        var from = 'Arka';
        var text = 'Hello there!'
        var message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(typeof message.createdAt).toBe('number');
    });
});