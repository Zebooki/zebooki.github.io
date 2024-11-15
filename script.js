let text = "";
console.log("Im In Love?");
let inLove = 0;
while(inLove < 100){
    text += "❤";
    setTimeout(400);
    document.getElementById("love").innerHTML = text;
    inLove++;
};
