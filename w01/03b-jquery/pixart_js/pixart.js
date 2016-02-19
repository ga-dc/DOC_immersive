var paintColor = "green";

for(var i=0; i < 10000; i++) {
  var newDiv = $("<div class='square'></div>");
  $("#paint-area").append(newDiv);
}

$(".square").on("mouseover", paintSquare);

function paintSquare(event) {
  $(this).css("background-color", paintColor);
}

// add the event listener for clicking
$("#set-color").on("click", changeColor);

function changeColor(event) {
  event.preventDefault();
  var newColor = $("#color-field").val();
  $(".brush").css("background-color", newColor);
  paintColor = newColor;
}
