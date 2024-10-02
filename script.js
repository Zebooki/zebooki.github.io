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
        user1 = "unset"
        if(inputValue != ""){
            user1 = inputValue;
        }else{
            user1 = "bum"
        }
        if(user1.value != "unset" && inputValue!= ""){
            user2 = inputValue;
        }else{
            user2 = "bum2"
        }


        document.getElementById('user1').innerHTML = user1;
        document.getElementById('user2').innerHTML = user2;

        
    });
  });