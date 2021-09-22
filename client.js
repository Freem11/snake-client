// establishes a connection with the game server

const net = require("net");

  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542,
  });

module.exports = conn;