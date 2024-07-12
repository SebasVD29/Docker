const express = require('express');
const consul = require('consul')({
  host: 'consul',
  port: 8500
});
//console.log('Consul configuration:', consul);
const app = express();

const CONFIG_KEY = 'myapp/config';
const getConfig = async () => {
  try {
    const result = await consul.kv.get(CONFIG_KEY);
    console.log('Raw Consul response:', result);

    if (!result) {
      throw new Error(`Configuration key "${CONFIG_KEY}" not found`);
    }

    if (!result.Value) {
      throw new Error(`Configuration key "${CONFIG_KEY}" found but no value present`);
    }
    const decodedValue = Buffer.from(result.Value, 'base64').toString('utf-8');
    return JSON.parse(decodedValue);
  } catch (err) {
    console.error('Error fetching configuration:', err.message);
    console.error('Full error details:', err);
    return {};
  }
};

app.get('/', async (req, res) => {
  const config = await getConfig();
  res.json(config);     
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
