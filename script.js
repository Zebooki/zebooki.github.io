document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("frame").hidden = true;
    const login = document.getElementById("login");
    const password = document.getElementById("password");
    const container = document.getElementById("chatbox");

    login.addEventListener("click", function() {
        if(password.value == "0MhsE,$?87XS[1D"){
            document.getElementById("frame").hidden = false;
            container.hidden = true;
        }else{
            container.hidden = true;
            const passwordWrong = document.createTextNode("nuh uh uh lil mf wrong password");

            document.body.appendChild(passwordWrong);
        }
    });
    

});