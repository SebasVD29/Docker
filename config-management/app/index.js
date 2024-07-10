const express = require('express');
const consul = require('consul')();
const app = express();

const CONFIG_KEY = 'myapp/config';

const getConfig = async () => {
  try {
    //const result = await consul.kv.get(CONFIG_KEY);
    //return JSON.parse(result.Value);//error
    console.log("entro al geT cONFIG")
  } catch (err) {
    console.error('Error fetching configuration:', err);
    return {};
  }
};

app.get('/', async (req, res) => {
  //const config = await getConfig();//error
  //res.json(config);
  console.log("entro al get")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
