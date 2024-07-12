const express = require('express');
const cors = require('cors');
const helloRoutes = require('./routes/helloRoutes');

const app = express();
const port = 3000;

app.use(cors()); // Agrega esta línea
app.use(express.json());
app.use('/api', helloRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

