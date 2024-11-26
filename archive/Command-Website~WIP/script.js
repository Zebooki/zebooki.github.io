document.addEventListener("DOMContentLoaded",function(){
    var i =0;
var txt = 'Welcome to Zebookis Web Directory | OS v1.0';
var proc = 'Do you wish to proceed and enter the site? [Y/N]'
var speed = 80;
var typing = new Audio('https://files.catbox.moe/buijy9.mp3');
console.log("hi")

function typeWriter(){
    if (i< txt.length){
        
        typing.load();
        document.getElementById("main").innerHTML += txt.charAt(i);
        i++;
        typing.play();
        setTimeout(typeWriter, speed);
    }
    
};

function typeWriter2(){
    
    if(i<proc.length){
        typing.load();
        document.getElementById("main").innerHTML += proc.charAt(i);
        i++;
        typing.play();
        setTimeout(typeWriter2, speed);
    };
};
    document.addEventListener("keypress",function(){
        document.getElementById("command").focus();
    });

    typeWriter();

    setTimeout(function(){
        i=0;
        document.getElementById("main").innerHTML = "<br>"
        typeWriter2();
    },6000)




});