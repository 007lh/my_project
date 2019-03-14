var Local = function(wsClient){

	var gameData = {};
	//游戏对象
	var game;
	//时间间隔
	var INTERVAL = 250;
	//定时器
	var timer = null;
	//时间计数器
	var timeCount = 0;
	//时间
	var time = 0;
	//绑定键盘事件
	var scoreData = 0;
	var bindKeyEvent = function(gdata){
		document.onkeydown = function(e){
			if(e.keyCode == 38){//up
				game.rotate();
			}else if(e.keyCode == 39){//right
				game.right();
			}else if(e.keyCode == 40){//down
				game.down();
			}else if(e.keyCode == 37){//left
				game.left();
			}else if(e.keyCode == 32){//space
				game.fall();
			}
			gameData = JSON.stringify({data: gdata,clientId: id});
			wsClient.send(gameData);
		}
	}

	//move
	var move = function(){
		gameData = JSON.stringify({data: game.clientBoxData, clientId: id});
		wsClient.send(gameData);
		timeFunc();
		if(!game.down()){
		game.fixed();
		var row = game.checkClear();
		if(row){
			scoreData = game.addScore(row);
			console.log("scoreData",scoreData);
			wsClient.send(JSON.stringify({"score": scoreData, clientId: id}));
		}
		//console.log(game.clientScore);
		var gameOver = game.checkOver();
		if(gameOver){
			document.getElementById('startGame').disabled=false;//启动按钮
			gameData = JSON.stringify({data: game.clientBoxData, clientId: id});
			wsClient.send(gameData);
			stop();
		}else{
		game.performNext(generateType());
		}
		}
	}

	//时间计数
	var timeFunc = function() {
		timeCount++;
		if(timeCount == 4) {
			timeCount = 0;
			time = time + 1;
			game.setTime(time);
		}
	}

	//方块种类随机数
	var generateType = function(){
		return Math.floor(Math.random()*7) + 1;
	}
	//开始
	var start = function(){
		var doms = {
			gameDiv: document.getElementById('game'),
			nextDiv: document.getElementById('next'),
			timeDiv: document.getElementById('time'),
			scoreDiv: document.getElementById('score')
		}
		game = new Game();

			document.getElementById('startGame').onclick = function(){
			//console.log("gameStatus",gameStatus);
				if(gameStatus===true) {
					game.init(doms);
					//gameData[data] = game.clientBoxData;
					gameData = JSON.stringify({data: game.clientBoxData,clientId: id});
					wsClient.send(gameData);
					bindKeyEvent(game.clientBoxData);
					timer = setInterval(move, INTERVAL);
					//console.log(game.clientBoxData);
					//gameData = {gameData: game.clientBoxData}
					document.getElementById('startGame').disabled = "disabled";//开始后，禁用开始按钮
			}else {
				alert("等待对方连接！");
			}
		}

		//console.log("timer="+timer);
	}

//结束
	var stop = function(){
		if(timer){
			clearInterval(timer);
			timer = null;
		}
		document.onkeydown = null;
		start();
	}

	//导出API
	this.start = start;
	//this.bindKeyEvent = bindKeyEvent;
	//this.gameData = gameData;//boxData的数据
}
