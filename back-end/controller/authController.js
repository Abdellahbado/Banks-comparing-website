const Banques = require("../model/Bank");
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;
const path = require("path");
require("dotenv").config();


const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    console.log(req.body);
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await Banques.foundUser(user);
    if (foundUser === 0) return res.sendStatus(401); 
    //Unauthorized 
    // evaluate password 
    const match = await Banques.foundPwd(user,pwd);

    if (match===1) {
        // Creeate the JWT
        const accessToken = jwt.sign(
            {"username" : user},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: "60s"}
        );

        const refreshToken = jwt.sign(
            {"username" : user},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: "1d"}
        ); 
        // on doit sauvgarder le refresh token
        const otherUsers = usersDB.users.filter(person => person.username !== user);
        const userloged = {
            "username" : user,
            "password" : pwd
        };
        const currentUser = {...userloged, refreshToken };
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin};