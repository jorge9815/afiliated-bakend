


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
      console.log(`A new Post has ben Created`);
      res.status(200).send("A new Post has ben Created.");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error occurred");
    }
  });
  