let text = "";
console.log("Im In Love?");
const inLove = true;
while(inLove == true){
    text += "❤";
    setTimeout(function(){
        document.getElementById("love").innerHTML = text;
    },100);
    
};
