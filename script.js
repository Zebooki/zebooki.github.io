let text = ""
let inLove = true
while(inLove == true){
    text += "❤";
    setTimeout(function(){
        document.getElementById("love").innerHTML = text;
    },100);
    
}
