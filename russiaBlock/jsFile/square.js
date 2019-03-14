var Square = function(){
	this.data = [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
    ];
	
	this.origin = {
		x:0,
		y:3
	}
}

var rotate = function(data){
	var bkData = [];
	if(data.length==data[0].length){
		for(var i=0;i<data.length;i++){
		var bklData=[];
		for(var j=data.length-1;j>=0;j--){
			bklData.push(data[j][i]);
		}
		bkData.push(bklData);
		}
	}
	return bkData;
}

Square.prototype.canRotate = function(isValid){
	var test = {};
	test.x = this.origin.x;
	test.y = this.origin.y;
	return isValid(test, rotate(this.data));
}

Square.prototype.rotate = function(){
	this.origin.x = this.origin.x;
	this.data = rotate(this.data);
}

Square.prototype.canDown = function(isValid){
	var test = {};
	test.x = this.origin.x + 1;
	test.y = this.origin.y;
	return isValid(test, this.data);
}

Square.prototype.down = function(){
	this.origin.x = this.origin.x + 1;
}

Square.prototype.canLeft = function(isValid){
	var test = {};
	test.x = this.origin.x;
	test.y = this.origin.y - 1;
	return isValid(test, this.data);
}

Square.prototype.left = function(){
	this.origin.y = this.origin.y - 1;
}

Square.prototype.canRight = function(isValid){
	var test = {};
	test.x = this.origin.x;
	test.y = this.origin.y + 1;
	return isValid(test, this.data);
}

Square.prototype.right = function(){
	this.origin.y = this.origin.y + 1;
}