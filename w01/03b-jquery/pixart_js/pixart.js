var paintColor = "green";

for(var i=0; i < 10000; i++) {
  var newDiv = $("<div class='square'></div>");
  $("#paint-area").append(newDiv);
}

$(".square").on("mouseover", paintSquare);
function paintSquare(event) {
  $(this).css("background-color", paintColor);
}
