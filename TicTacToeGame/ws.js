var app = require("http").createServer();
var io = require("socket.io")(app);
var port = process.env.PORT || 3000;

var userNum=0;
var userMap={};

app.listen(port,function(){
  console.log("listening on: "+port);
});

io.on("connection",function(socket){
    userNum++;
    socket.userID = userNum;
    userMap[userNum] = socket;
    console.log("user "+userNum + "come in!!!");
    //等待第二位玩家加入……
    if(userNum%2===1) {
      socket.emit("waiting", "等待第二位玩家加入……!!!");
    }else {
      socket.emit("init",{people: "O", statusAB: false});
      userMap[userNum-1].emit("init",{people: "X", statusAB: true});
      socket.emit("start");
      userMap[userNum-1].emit("start","由你先下棋子！");
    };

    socket.on("userStatus", function(data){
        if(socket.userID%2===0) {
           if(data["gameOver"]!=undefined){//游戏结束了
              socket.emit("userStatus",{statusAB: false});
              userMap[socket.userID-1].emit("userStatus",{statusAB: true, num: data["num"],
                           piece:data["piece"], gameOver:data["gameOver"]});
            }else{//游戏进行中
              socket.emit("userStatus",{statusAB: false});
              userMap[socket.userID-1].emit("userStatus",{statusAB: true, num: data["num"], piece:data["piece"]});
            }

        }else {
          if(data["gameOver"]!=undefined) {
            socket.emit("userStatus",{statusAB: true});
            userMap[socket.userID+1].emit("userStatus",{statusAB: false, num: data["num"],
            piece:data["piece"], gameOver:data["gameOver"]});
          } else {
            socket.emit("userStatus",{statusAB: false});
            userMap[socket.userID+1].emit("userStatus",{statusAB: true, num: data["num"], piece:data["piece"]});
          }

        }
    })

    socket.on("disconnect", function(){
      delete userMap[socket.userID];
      console.log("user "+socket.userID +" close!");
    });
});
