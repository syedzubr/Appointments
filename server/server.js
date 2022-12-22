const express = require("express");
const app = express(),
  bodyParser = require("body-parser");
port = 3080;

const appointments = [];

app.use(bodyParser.json());

app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

app.post("/api/appointment", (req, res) => {
  console.log("request data here",req.body)
  const appointment = req.body;
  appointments.push(appointment);
  res.json("appointment added");
  console.log(appointments);
});

app.get("/", (req, res) => {
  res.send("App Works !!!!");
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
