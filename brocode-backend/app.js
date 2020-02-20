const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/heartbeat", (req, res) => {
    res.send('Heartbeat received');
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    if(['mrigank', 'pavan', 'diggyboy', 'ankit', 'manoj', 'dipesh', 'sahil', 'nishikant'].includes(username)) {
        return res.status(200).send(true);
    } else {
        return res.status(403).send(false);
    }
});
app.listen(3003);

console.log("Listening on port 3003");

