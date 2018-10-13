var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

var isActive = (name, userArray) => {
    var activeUser = userArray.filter((user) => user.name === name)[0];
    return activeUser !== undefined ? true : false;
};

module.exports = {
    isRealString,
    isActive
};