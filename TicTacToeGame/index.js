
var gameModel;
var peoplePiece="",isPutDown = false;
$("#gameArea").hide();

$("#Computer").click(function(){
    gameModel = "computer";
    $("#btn").hide();
    $("#gameArea").show();
    $("statusB").hide();
    var game = new Game(gameModel);
    game.start();

});

$("#People").click(function(){
    var socket = io('ws://localhost:3000');
    gameModel = "people";
    $("#btn").hide();
    $(".x-or-o").hide();
    $("#gameArea").show();
    socket.on("waiting", function(str) {
      //console.log(str);
      $("#statusB").html(str);
    });
    socket.on("init", function(data) {
      console.log(data);
      peoplePiece = data["people"];
      $("#piece").html("你的棋子是 "+ peoplePiece);
      isPutDown = data["statusAB"];
    //  $("#statusB").;
    });
    socket.on("start", function(str) {
      $("#statusB").html("");
      if(str!=null) {
        confirm(str);
      };
  });

  var gameByPeople = new Game(gameModel, socket ,peoplePiece, isPutDown);

  


    gameByPeople.start();
});
