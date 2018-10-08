var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {

    it ('should generate correct location object', () => {
        var from = 'Arka';
        var latitude = 22;
        var longitude = 88;
        var url = 'https://www.google.com/maps?q=22,88';
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message.from).toBe(from);
        expect(message.url).toBe(url);
        expect(typeof message.createdAt).toBe('number');
    });
});