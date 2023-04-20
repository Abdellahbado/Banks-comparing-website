const Banques = require("../model/Bank");


const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await Banques.foundUser(user);
    if (foundUser === 0) return res.sendStatus(401); 
    //Unauthorized 
    // evaluate password 
    const match = await Banques.foundPwd(user,pwd);
    if (match===1) {
        res.json({ 'success': `User ${user} is logged in!` });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin};