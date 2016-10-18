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





//CHARLES DOWELL'S CODE NO STEAL
$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
  if ($("input:checked").val() == "echo") {
    $("#inputArea").keydown(function(e) {
      if(e.keyCode == 13) {
        $("#textArea").append(document.getElementById('inputText').value += " ");
        document.getElementById('inputText').value = "";
    }
    });
  }
  //CHARLES DOWELL'S CODE NO STEAL
  else if ($("input:checked").val() == "caesar") {
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
  }
  //CHARLES DOWELL'S CODE NO STEAL
  else if ($("input:checked").val() == "heiro") {
    $("#inputArea").keydown(function(e) {
      if(e.keyCode == 13) {
    var ex = document.getElementById('inputText').value;

    var y = ex.length + 1;

    var minus = x - 1;

    for(var x = 0; x < y; x++) {
      var minus = x - 1;
      var z = ex.substring(minus, x);
      console.log(z);
      $("#textArea").append(heiroConvert[z]);

    }
    }
    });
  }
})

//CHARLES DOWELL'S CODE NO STEAL




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

var heiroConvert = {
  "a": "<img src='images/heiroglyphics/a.gif'>",
  "b": "<img src='images/heiroglyphics/b.gif'>",
  "c": "<img src='images/heiroglyphics/c.gif'>",
  "d": "<img src='images/heiroglyphics/d.gif'>",
  "e": "<img src='images/heiroglyphics/e.gif'>",
  "f": "<img src='images/heiroglyphics/f.gif'>",
  "g": "<img src='images/heiroglyphics/g.gif'>",
  "h": "<img src='images/heiroglyphics/h.gif'>",
  "i": "<img src='images/heiroglyphics/i.gif'>",
  "j": "<img src='images/heiroglyphics/j.gif'>",
  "k": "<img src='images/heiroglyphics/k.gif'>",
  "l": "<img src='images/heiroglyphics/l.gif'>",
  "m": "<img src='images/heiroglyphics/m.gif'>",
  "n": "<img src='images/heiroglyphics/n.gif'>",
  "o": "<img src='images/heiroglyphics/o.gif'>",
  "p": "<img src='images/heiroglyphics/p.gif'>",
  "q": "<img src='images/heiroglyphics/q.gif'>",
  "r": "<img src='images/heiroglyphics/r.gif'>",
  "s": "<img src='images/heiroglyphics/s.gif'>",
  "t": "<img src='images/heiroglyphics/t.gif'>",
  "u": "<img src='images/heiroglyphics/u.gif'>",
  "v": "<img src='images/heiroglyphics/v.gif'>",
  "w": "<img src='images/heiroglyphics/w.gif'>",
  "x": "<img src='images/heiroglyphics/x.gif'>",
  "y": "<img src='images/heiroglyphics/y.gif'>",
  "z": "a",
  " ": " ",
}
