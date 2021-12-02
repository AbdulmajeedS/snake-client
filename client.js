const net = require("net");
const {IP, PORT} = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AMS");
    conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 300);

    
  });

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");
// connect();
module.exports = { connect };