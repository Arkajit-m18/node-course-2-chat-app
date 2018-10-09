// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor() {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        
        return user;
    }
    removeUser(id) {
        
        // var user = this.getUser(id);
        // if(user) {
        //     this.users = this.users.filter((user) => user.id !== id);
        // }
        // return user;

        var removedUser = this.users.filter((user) => user.id === id);
        this.users = this.users.filter((user) => user.id !== id);

        return removedUser[0];
    }
    getUser(id) {
        var user = this.users.filter((user) => user.id === id);

        return user[0];
    }
    getUserList(room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}
module.exports = {
    Users
};




// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }
// var me = new Person('Arkajit', 23);
// console.log(me.name, me.age);
// console.log(me.getUserDescription());