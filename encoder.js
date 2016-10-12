var shift = {
  "a": "z",
  "b": "a",
  "c": "b",
  "d": "c",
  "e": "d",
  "f": "e",
  "g": "f",
  "h": "g",
  "i": "h",
  "j": "i",
  "k": "k",
  "l": "l",
  "m": "l",
  "n": "m",
  "o": "n",
  "p": "o",
  "q": "p",
  "r": "z",
  "s": "r",
  "t": "s",
  "u": "t",
  "v": "u",
  "w": "v",
  "x": "w",
  "y": "x",
  "z": "y",
  " ": " "
}

//$("#inputArea").keydown(function(e) {
//  if(e.keyCode == 13) {
//    $("#textArea").append(document.getElementById('inputText').value += " ");
//    document.getElementById('inputText').value = "";
//}
//});
$("#inputArea").keydown(function(e) {
  if(e.keyCode == 13) {
var ex = document.getElementById('inputText').value;

var y = ex.length + 1;
var minus = x - 1;

for(var x = 0; x < y; x++) {
  var minus = x - 1;
  var z = ex.substring(minus, x);
  console.log(z);
  $("#textArea").append(caeserConvert[z]);

}
}
});


//CHARLES DOWELL'S CODE NO STEAL
$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});
//CHARLES DOWELL'S CODE NO STEAL
if ($("input:checked").val() == "echo") {

}
//CHARLES DOWELL'S CODE NO STEAL
if ($("input:checked").val() == "caesar") {

}
//CHARLES DOWELL'S CODE NO STEAL
if ($("input:checked").val() == "heiro") {

}


var caeserConvert = {
  "a": "z",
  "b": "a",
  "c": "b",
  "d": "c",
  "e": "d",
  "f": "e",
  "g": "f",
  "h": "g",
  "i": "h",
  "j": "i",
  "k": "j",
  "l": "k",
  "m": "l",
  "n": "m",
  "o": "n",
  "p": "o",
  "q": "p",
  "r": "q",
  "s": "r",
  "t": "s",
  "u": "t",
  "v": "u",
  "w": "v",
  "x": "w",
  "y": "x",
  "z": "a",
  " ": " ",
}
