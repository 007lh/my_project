var Game = function(){
	var gameDiv;
	var nextDiv;
	var timeDiv;
	var scoreDiv;
	//得分
	var score = 0;

	var boxData=[
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

	//当前方块
	var cur;
	//下一个方块
	var next;
    var gameDivs=[];
	var nextDivs=[];
	//初始化Div
	var initDiv = function(container, data, divs) {
	  for(var i=0; i<data.length; i++){
		var div = [];
		for(var j=0; j<data[0].length; j++){
		  var newNode = document.createElement('div');
		  newNode.className = 'none';
		  newNode.style.top = (i*20) + 'px';
		  newNode.style.left = (j*20) + 'px';
		  container.appendChild(newNode);
		  div.push(newNode);
		}
		divs.push(div);
	  }
	}
	//刷新Div
	var refreshDiv = function(data, divs) {
		//导出数据 boxdata
	//	this.clientBoxData = data;
	  for(var i=0; i<data.length; i++){
		for(var j=0; j<data[0].length; j++){
		  if(data[i][j] == 0){
			  divs[i][j].className = 'none';
			}else if(data[i][j] == 1){
			  divs[i][j].className = 'done';
			}else if(data[i][j] == 2){
			  divs[i][j].className = 'current';
		  }
		}
	  }
	}

	//判断位置是否合法
	var check = function(pos, x, y){
		if(pos.x + x <0){
			return false;
		}else if(pos.x + x >=boxData.length){
			return false;
		}else if(pos.y + y < 0){
			return false;
		}else if(pos.y + y >=boxData[0].length){
			return false;
		}else if(boxData[pos.x + x][pos.y + y] == 1){
			return false;
		}else {
			return true;
		}
	}

	//检测数据是否合法
	var isValid = function(pos, data){
		for(var i=0; i<data.length; i++){
			for(var j=0; j<data[0].length; j++){
				if(data[i][j] != 0){
					if(!check(pos, i, j)){
						return false;
					}
				}
			}
		}
		return true;
	}
	//设置数据
	var setData = function(){
		for(var i=0; i<cur.data.length; i++){
			for(var j=0; j<cur.data[0].length; j++){
				if(check(cur.origin, i, j)){
				   boxData[cur.origin.x + i][cur.origin.y + j] = cur.data[i][j];//cur.data[i][j]是4x4矩阵的数据而前面属于界面boxData,所以要加个是否出界的判断。如果不加，找不到那个点，会出现报错。
				}
			}
		}
	}
	//清除数据
	var clear = function(){
		for(var i=0; i<cur.data.length; i++){
			for(var j=0; j<cur.data[0].length; j++){
				if(check(cur.origin, i, j)){
				  boxData[cur.origin.x + i][cur.origin.y + j] = 0;
				}
			}
		}
	}
	//初始化
	var init = function(doms){
		gameDiv = doms.gameDiv;
		nextDiv = doms.nextDiv;
		timeDiv = doms.timeDiv;
		scoreDiv = doms.scoreDiv;
		cur = SquareFactory.prototype.make(Math.floor(Math.random()*7)+1);
		next = SquareFactory.prototype.make(Math.floor(Math.random()*7)+1);
		console.log(Math.floor(Math.random()*7)+1);
		initDiv(gameDiv, boxData, gameDivs);
		initDiv(nextDiv, next.data, nextDivs);
		//console.log(next.data);
		cur.origin.x = 0;
		cur.origin.y = 3;
		setData();
		refreshDiv(boxData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}

	//rotate
	var rotate = function(){
		if(cur.canRotate(isValid)){
		clear();
		cur.rotate();
		setData();
		refreshDiv(boxData, gameDivs);
		}
	}
	//down
	var down = function(){
		if(cur.canDown(isValid)){
		clear();
		cur.down();
		setData();
		refreshDiv(boxData, gameDivs);
		return true;
		}else{
			return false;
		}
	}

	//left
	var left = function(){
		if(cur.canLeft(isValid)){
			clear();
			cur.left();
			setData();
			refreshDiv(boxData, gameDivs);
		}
	}

	//right
	var right = function(){
		if(cur.canRight(isValid)){
			clear();
			cur.right();
			setData();
			refreshDiv(boxData, gameDivs);
		}
	}

	//fixed落到底部，积木固定变黑
	var fixed = function(){
		for(var i=0;i<cur.data.length;i++){
			for(var j=0;j<cur.data[0].length;j++){
				if(check(cur.origin, i, j)){
					if(boxData[cur.origin.x + i][cur.origin.y + j] ==2){
						boxData[cur.origin.x + i][cur.origin.y + j] = 1;
					}
				}
			}
		}
		refreshDiv(boxData, gameDivs);
	}
	//下一个方块
	var performNext = function(type){
		cur = next;
		setData();
		next = SquareFactory.prototype.make(type);
		refreshDiv(boxData, gameDivs);
		refreshDiv(next.data, nextDivs);
	}

	//消行
	var checkClear = function(){
		var row=0;
		for(var i=boxData.length-1;i>=0;i--){
			var clear = true;
			for(var j=0;j<boxData[0].length;j++){
				if(boxData[i][j] != 1){
					clear = false;
					break;
				}
			}
			if(clear){
				row++;
				for(var m=i;m>0;m--){
					for(var n=0; n<boxData[0].length;n++){
						boxData[m][n] = boxData[m-1][n];
					}
				}
				for(var n=0; n<boxData[0].length;n++){
						boxData[0][n] = 0;
				}
				i++;
			}
		}
		return row;
	}

	//检查是否游戏结束
	var checkOver = function(){
		var gameOver = false;
		for(var i=0;i<boxData[0].length;i++){
			if(boxData[1][i] == 1){
				gameOver = true;
			}
		}
		return gameOver;
	}

	//设置时间
	var setTime = function(time){
		timeDiv.innerHTML = time;
	}
	//得分计数
	var addScore = function(row,bks){
		switch(row){
			case 1:
				score +=10;
				break;
			case 2:
				score +=30;
				break;
			case 3:
		        score +=60;
				break;
			case 4:
			    score +=100;
				break;
			default:
				break;
		}
		//this.sco = score;
		scoreDiv.innerHTML = score;
		return score;
	}

	//导出API
	this.init = init;
	this.down = down;
	this.left = left;
	this.right = right;
	this.rotate =rotate;
	this.fall = function(){while(down());}
	this.fixed = fixed;
	this.performNext = performNext;
	this.checkClear = checkClear;
	this.checkOver = checkOver;
	this.setTime = setTime;
	this.addScore = addScore;

	this.initDiv = initDiv;//初始化div
	this.refreshDiv = refreshDiv;

	this.clientBoxData = boxData;//导出数据
  this.clientScore = score;//导出score
}
