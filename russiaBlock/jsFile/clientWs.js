var wsClient = new WebSocket("ws:\\localhost:3000");

var boxdata=[
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
   ];
var game2Divs = [];
//游戏者状态
var gameStatus=false;
var game2 = new Game();
var local = new Local(wsClient);
var id;
var game2display = function(boxdata) {
  var doms = {
    game2Div: document.getElementById('game2'),
    score2Div: document.getElementById('score2')
  };

  //显示第二位游戏者的状态
  //var game2 = new Game();
    game2.initDiv(doms.game2Div, boxdata, game2Divs);
    game2.refreshDiv(boxdata, game2Divs);

}

wsClient.onopen = function(event) {
  console.log("准备开始！！！");
  local.start();
  //local.start(gameStatus);
  game2display(boxdata);//初始化对方游戏区域
}


wsClient.onmessage = function (event) {
    let t = JSON.parse(event.data);//服务器传送过来的数据

      if(t["score"]!=undefined) {//对方的分数显示在界面上
        console.log(t);
      }
      //let boxData = event.data;
      if(t["data"]!=undefined){//boxData的数据
        game2.refreshDiv(t["data"], game2Divs);
      }else if(t["gameStatus"]===true){//用户是否都连接
        gameStatus=true;
      }else if(t["manNum"]!=undefined){//为连进来的用户定义一个名字
         id = t["manNum"];
      }else if(t["score"]!=undefined) {//对方的分数显示在界面上
        document.getElementById("score2").innerHTML=t["score"];
      }

			//document.body.appendChild(div);
		}

wsClient.onclose = function () {
			console.log("ws close");
		}

wsClient.onerror = function () {
			console.error("ws error");
		}
//local.start(gameStatus);
