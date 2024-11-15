let text = "";
console.log("Im In Love?");
let inLove = 0;
while(inLove < 10000){
    text += "❤";
    inLove++;
    setTimeout(function(){
        document.getElementById("love").innerHTML = text;
    },100);
    
};
