var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
if(character.classList != "animate"){
  character.classList.add("animate");
   }
  setTimeout(function(){
  character.classList.remove("animate");
  },500ms)
}

var checkDead = setInterval(function(){
var characterTop = 
parseInt(window.getComputedStyle(character).getPrope
rtyValue("top"));
var blockLeft = 
parseInt(window.getComputedStyle(block).getPrope
rtyValue("left"));
if(blockLeft<20 && blockLeft>0 %% characterTop>=130){
block.style.animation = "none";
block.style.display = "none";
alert("u lose becaue you hit something, so hahahaha on you")
}
},10);
