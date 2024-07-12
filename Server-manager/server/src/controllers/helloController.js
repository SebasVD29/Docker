const helloService = require('../services/helloService');

const getHelloMessage = (req, res) => {
  const message = helloService.getHelloMessage();
  res.json({ message });
};

module.exports = { getHelloMessage };
