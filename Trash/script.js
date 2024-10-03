document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("chatbox").hidden = true;
    document.getElementById("userChat").hidden = true;



    const inputElement = document.getElementById('input');
    const buttonElement = document.getElementById('btn');

  
    buttonElement.addEventListener('click', function() {
        const inputValue = inputElement.value;
        console.log(inputValue);

        document.getElementById('cont').hidden = true;
        document.getElementById('chatbox').hidden = false;
        document.getElementById("userChat").hidden = false;
        user1 = "User 1"
        user2 = "User 2"

        document.getElementById('user1').innerHTML = user1;
        document.getElementById('user2').innerHTML = user2;
        
    });

    const sendButton = document.getElementById("send");
    sendButton.addEventListener("click", function(){
        const inputVal = document.getElementById("chat").value;
        const message = document.createElement("div");
        message.class = "message";
        message.innerHTML = inputVal;
        document.getElementById("userChat").appendChild(message); 
    });
  });