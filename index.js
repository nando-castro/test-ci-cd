import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Xablau!!!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodou suave na porta: ${PORT}`));
