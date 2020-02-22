const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

const validUsers = require('./data/users');
const techs = require('./data/techs');
const collaborators = require('./data/collaborators');

app.get("/api/v1/heartbeat", (req, res) => {
    res.send('Heartbeat received');
});

app.get("/api/v1/techs", (req, res) => {
    console.log(techs);
    res.status(200).send(JSON.stringify(techs));
});

app.get("/api/v1/techs", (req, res) => {
    console.log(techs);
    res.status(200).send(JSON.stringify(techs));
});

app.get("/api/v1/techs/:name", (req, res) => {
    const techName = req.params.name;
    const tech = techs.find(tech => tech.name.toLowerCase() === techName.toLowerCase());

    if (tech === undefined) {
        res.status(404).send('Tech not found');
        return;
    }

    res.status(200).send(JSON.stringify(tech));
});

app.get('/api/v1/techs/collaborators/:name', (req, res) => {
    const techName = req.params.name;
    const techCollaborators = collaborators.find(collaborator => collaborator.techName.toLowerCase() === techName.toLowerCase());

    if (techCollaborators === undefined) {
        res.status(404).send('Tech not found');
        return;
    }

    res.status(200).send(JSON.stringify(techCollaborators.collaborators));
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

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/brocode')
    .then(() => console.log('Connection successful'), (err) => console.log('Error', err));
