var name = prompt("what is your name , please?");
for (var i = 0; i < 8; i++) {
     j = i.toString();
     var element = document.getElementById('name'+j);
     element.innerHTML=name;
 }



