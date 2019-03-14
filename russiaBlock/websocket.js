var ws = require("nodejs-websocket");
var port = process.env.PORT || 3000;
//var socketClient={};
var people = 0;
var peopleData = {};
var server = ws.createServer(function(conn) {
    people ++;
    peopleData[people] = conn;
    peopleData[people].sendText(JSON.stringify({"manNum": people}));
    let peopleName = "people" + people;
    console.log(peopleName+" come in!!!");
    if(people%2 === 0) {
      server.connections[people-2].sendText(JSON.stringify({gameStatus: true}));
      server.connections[people-1].sendText(JSON.stringify({gameStatus: true}));
    };
    conn.on("text", function (str) {
      let parseData = JSON.parse(str);
      //console.log(parseData);
      if(parseData["clientId"] % 2===0) {
        peopleData[parseData["clientId"]-1].sendText(str);
      }else if(parseData["clientId"] % 2===1) {
          peopleData[parseData["clientId"]+1].sendText(str);
        }
/*
      if(people%2 === 1) {
      //  if(server.connections[people+1]){server.connections[people].sendText(str);}
        server.connections[people-1].sendText(str);
     }else{
        //server.connections[people-2].sendText(str);
        peopleData[people].sendText(str);
      }
      */
  });


    conn.on("close", function(){
      console.log(peopleName+" close!!!")
    });

    conn.on("error", function(err){
      console.log("ERROR!!!",err);
    });
}).listen(port);
