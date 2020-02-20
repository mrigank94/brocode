const express = require('express');
const cors = require('cors');
const app = express();
const validUsers = [{
    username: 'mrigank',
    password: 'mrigank'
},
    {
        username: 'pavan',
        password: 'mrigank'
    },
    {
        username: 'diggyboy',
        password: 'mrigank'
    },
    {
        username: 'ankit',
        password: 'mrigank'
    },
    {
        username: 'manoj',
        password: 'mrigank'
    },
    {
        username: 'dipesh',
        password: 'mrigank'
    },
    {
        username: 'nishikant',
        password: 'mrigank'
    }];

app.use(cors());
app.use(express.json());
app.get("/heartbeat", (req, res) => {
    res.send('Heartbeat received');
});

app.post("/api/login", (req, res) => {
    const {username, password} = req.body;
    console.log(username);
    if (validUsers.find(user => user.username === username && user.password === password)) {
        return res.status(200).send(true);
    } else {
        return res.status(403).send(false);
    }
});

app.post("/api/signup", (req, res) => {
    const {username, password} = req.body;
    validUsers.push({username, password});
    return res.status(200).send('User added successfully');
});

app.listen(3003);

console.log("Listening on port 3003");

