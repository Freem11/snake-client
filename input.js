
//let conn;

const setupInput = function (connect) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //stdin.on("data", handleUserInput)
  stdin.on("data", (key) => {
      handleUserInput(key, connect)
  })
  //conn = connect

  return stdin;
};

const handleUserInput = function (key, conn) {

  //console.log(key)
    if(key === '\u0003'){
      process.exit();
    }

    if(key === 'w'){
      conn.write("Move: up") 
    }
    
    if(key === 's'){
      conn.write("Move: down") 
    }

    if(key === 'a'){
      conn.write("Move: left") 
    }

    if(key === 'd'){
      conn.write("Move: right") 
    }

    if(key === 'h'){
      conn.write("Say: beep beep") 
    }
  
};

module.exports = setupInput;