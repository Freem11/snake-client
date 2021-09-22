const { Console } = require("console");
const conn = require("./client");

// establishes a connection with the game server
const connect = function () {

  conn.on("connect", () => {
    // code that does something when the connection is first established
  console.log("Successfully connected to game server\n Name: MPF")

  });
  
  conn.on("data", (data) => {
  console.log("Server response:", data)

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
 };

console.log("Connecting ...");
connect();
