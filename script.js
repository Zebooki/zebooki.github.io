window.addEventListener('DOMContentLoaded',function(){
    console.log("Im In Love?");
    this.setInterval(function(){
        document.getElementById("love").style.color = "red";
        this.setTimeout(function(){
            document.getElementById("love").style.color = "#00ff00";
        },325)
    },750)
    
})
