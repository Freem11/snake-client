// establishes a connection with the game server

const net = require("net");
const constants = require("./constants");

// establishes a connection with the game server
const connect = function () {
  
  const conn = net.createConnection({
    host: constants.HOST,
    port: constants.PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server")
    conn.write("Name: MPF") 
  })
  
  
  conn.on("data", (data) => {
    console.log("Server response:", data)
  });
  

  return conn;
 };

module.exports = connect;