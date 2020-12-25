

var name = prompt("what is your NickName , please?" , "Your Nick Name");
if (name==="Your Nick Name") {
    alert("ALERT! You haven't set your nickname , So you'll be adressed as Random person the whole time. :( ")
    for (var i = 0; i < 8; i++) {
        j = i.toString();
        var element = document.getElementById('name'+j);
        element.innerHTML = "Random Person";
    }
}
else{
  for (var i = 0; i < 8; i++) {
    j = i.toString();
    var element = document.getElementById('name'+j);
    element.innerHTML = name;
    }
}



