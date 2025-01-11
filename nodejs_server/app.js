const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir proyectos de manera dinámica desde la carpeta de proyectos
app.use('/:project', (req, res) => {
  const projectPath = path.resolve(`/app/proyectos/${req.params.project}`);
  res.sendFile(path.join(projectPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});