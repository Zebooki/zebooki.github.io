window.addEventListener('DOMContentLoaded',function(){
    console.log("Im In Love?");
    this.setInterval(function(){
        document.getElementById("love").style.color = "#8400ff";
        this.setTimeout(function(){
            document.getElementById("love").style.color = "#ff00d0";
        },325)
    },750)
    console.log("stop snooping around...")
    
})
