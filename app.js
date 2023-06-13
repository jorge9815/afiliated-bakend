const express = require("express");
const app = express();



app.use(express.json());

app.get("/clients", async (req, res) => {
  try {
    const data = await service.read();
    res.json(data);
    console.log("successful query");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred");
  }
});

app.post("/client", async (req, res) => {
  console.log("Try to Create a New Client");
  console.log(req.body);
  const client = {
    ClientId: req.body.ClientId,
    Name: req.body.Name,
    SpendMoney: req.body.SpendMoney,
  };

  try {
    await service.create(client);
    console.log("Data inserted");
    res.status(200).send("Data inserted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred");
  }
});

app.put("/client", (req, res) => {
  console.log(req.body)
  const client = {
    _id: req.body._id,
    Name: req.body.Name,
    SpendMoney: req.body.SpendMoney,
  };
 service.update(client)
 res.status(204).send("Updated")
});


app.delete("/client", (req, res) => {
  service.deleteOne(req.query.id)
  res.status(204).send("Deleted Successfully")
});

app.listen(3001, function () {
  console.log("listening on 3000");
  service.connect();
});
