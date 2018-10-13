const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node course'
        }];
    });

    it ('should add a new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Arkajit',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
        expect(resUser).toMatchObject(user);
    });

    it ('should remove a user', () => {
        var id = '2';
        var userToBeRemoved = users.users[1];
        var removedUser = users.removeUser(id);
        expect(removedUser).toMatchObject(userToBeRemoved);
        expect(removedUser.id).toBe(id);
        expect(users.users.length).toBe(2);
    });
    
    it('should not remove a user', () => {
        var id = '5';
        var removedUser = users.removeUser(id);
        expect(removedUser).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it ('should find user', () => {
        var id = '3';
        var user = users.getUser(id);
        expect(user).toMatchObject(users.users[2]);
        expect(user.id).toBe(id);
        expect(users.users.length).toBe(3);
    });
    
    it ('should not find a user', () => {
        var id = '5';
        var user = users.getUser(id);
        expect(user).toBeFalsy();
    });

    it ('should return name for Node course', () => {
        var userList = users.getUserList('Node course');
        expect(userList).toEqual(['Mike', 'Julie']);
    });
    
    it ('should return name for React course', () => {
        var userList = users.getUserList('React course');
        expect(userList).toEqual(['Jen']);
    });

    it ('should return unique room values', () => {
        var activeRooms = users.getActiveRooms();
        expect(activeRooms.length).toBe(2);
        expect(activeRooms).toEqual(['Node course', 'React course']);
    });
});