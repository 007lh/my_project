var Game = function(model, socket){

  var gameBox=[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  const ID = document.getElementById("gameBox");

  if(model==="computer"){//如果是人机对战，初始化其值
    var gamePiece;// 选手棋子选择
    var cmpPiece;//电脑棋子选择
    var choosePiece = function() {
      $("#x").click(function(){
        gamePiece="X";
        //console.log(gamePiece)
        cmpPiece="O"
        $("#o").hide();
      });
      $("#o").click(function(){
        gamePiece="O";
        cmpPiece="X"
        $("#x").hide();
      });
    };

  }else if(model==="people") {
  }

  var divs=[];
  var initDiv = function(boxData) {
    var i,j,num=0;
    for(i=0;i<boxData.length;i++) {
      var div=[];
      for(j=0;j<boxData[0].length;j++) {
        var newNode = document.createElement("div");
        newNode.className = "lbox";
       // newNode.id = ""+num;
        newNode.style.top = (i*150) + "px";
        newNode.style.left = (j*150) + "px";
        ID.appendChild(newNode);
        div.push(newNode);
        num++;
      };
      divs.push(div);//把新的div放入其中以备不时之需；
    };
  };



  //两种元素选择器
  //$("#3").click(function(){console.log("1")});
  //$("#gameBox").children().eq(1).click(function(){console.log("3")})

  //Restart
  var Restart = function() {
    setTimeout(function(){
      gameBox=[
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      if(model==="computer"){
        $("#o,#x").show();
      }

    $("#gameBox").empty();
     start();
   },3000);
  };

  //当人点击时，电脑做出下子操作。
  var putCmpPiece = function() {
    let i,j;
    //let z=9;
    for(i=0;i<gameBox.length;i++) {
      for(j=0;j<gameBox[0].length;j++){
        if(gameBox[i][j]===0) {//计算机做简单处理，可设计算法增加难度。
          $("#gameBox").children().eq(i*3+j).text(cmpPiece);
          gameBox[i][j]=2;
          if(cheakWin(i,j)) {
            confirm("Computer Win!!!");
            console.log("Computer Win!!!");
            Restart();
          }
          return;
        }
      }
    }

    //操作完，游戏结束，重新开始。
    confirm("Draw!!!");
    console.log("Draw");
    Restart();
  };

  var putPeoplePiece = function(i, j, num) {
    if(isPutDown) {
      $("#gameBox").children().eq(num).text(peoplePiece);
      if(peoplePiece==="X"){
        gameBox[i][j] = 1;
      }else if(peoplePiece==="O"){
        gameBox[i][j] = 2;
      };
      if(cheakWin(i,j)) {
        //console.log("gameover ","????")
        socket.emit("userStatus", {"num": num, "piece":peoplePiece, gameOver:true});
        socket.emit("gameOver");
        confirm("You Win!!!");
        console.log("You Win!!!");
        Restart();
      }else { //
         socket.emit("userStatus", {"num": num, "piece":peoplePiece});
      }
    }

  }

  var putPiece=function(i,j){// 放下棋子的棋子显示，和gameBox的状态改变gameBox的i（行）j(列)
    var num = i*3+j;
    $("#gameBox").children().eq(num).click(function(){
          if(gameBox[i][j]===0) {
            console.log(num);

            if(model==="computer") {
              if(gamePiece==="X" || gamePiece==="O") {
                $("#gameBox").children().eq(num).text(gamePiece);
                gameBox[i][j] = 1;
                if(cheakWin(i,j)) {
                  confirm("You Win!!!");
                  console.log("You Win!!!");
                  Restart();
                }else { // 当人点击时，电脑做出放子操作。
                 putCmpPiece();
                }
              }
            } else if(model==="people"){
                putPeoplePiece(i, j, num);
            }

          };

        });
  };
  //

  var cheakWin =function(i,j) {//对放下的棋子做判断即可
    var status = gameBox[i][j];
    console.log("cheakWinstatus",status);
    var x=3,y=3,count=0;
    while(x) {
      --x;
      if(status===gameBox[x][j]){
        count++;
      }else {
        x=0;
      }
    };
    if(count===3) {return true;}
    count=0;
    //横
     while(y) {
      --y;
      if(status===gameBox[i][y]){
        count++;
      }else {
        y=0;
      }
    };
    if(count===3) {return true;}
    //右斜
    if(i===j) {
      if(gameBox[0][0]===status && gameBox[1][1]===status && gameBox[2][2]===status) {
        return true;
      }
    }
    //左斜
    if(gameBox[0][2]===status && gameBox[1][1]===status && gameBox[2][0]===status) {
        return true;
      }
    return false;
  };

  var start = function() {

    initDiv(gameBox);
    console.log(model)
    if(model==="computer") {
      choosePiece();
    }else if (model==="people") {
    //  confirm("由你开始下棋子！");//confirm
    }
    for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
        putPiece(i,j);
      }
    }
  };

  socket.on("userStatus", function(data) {
    if(data["num"]!=null) {
      var hang,lie;
      $("#gameBox").children().eq(data["num"]).text(data["piece"]);
      lie = data["num"]%3;
      hang = (data["num"]-lie)/3;
      if(data["piece"] ==="X") {
        gameBox[hang][lie] = 1;
      } else if(data["piece"] ==="O"){
        gameBox[hang][lie] = 2;
      }

    }
    if(data["gameOver"]) {
      confirm("你输了！");
      //gameByPeople.Restart();
      Restart();
    }
    isPutDown = data["statusAB"];
    console.log("userStatus",data, isPutDown);
  });

  this.start = start;
  this.Restart = Restart;
//  start();
}
//this.Game = Game;
