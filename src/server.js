const app = require("./app");

const PORT = 8000;

app.listen(PORT, () => {
  console.log('Escuchando en el puerto', PORT);
});