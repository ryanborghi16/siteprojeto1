console.log("JS carregado!");
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let enviar = document.getElementById('enviar');

enviar.addEventListener('click', (event)=>{
    event.preventDefault();

    if(email.value === '' || senha.value === ''){
        alert("preencher os campos");
        return;
    }


    if (!email.value.includes("@")){
        alert("o email não tem @");
        return;
    }
    if (!email.value.includes(".")){
        alert("o email não tem .");
        return;
    }

    if(email.value === "admin@gmail.com" && senha.value === "1234"){
        window.location.href = "index.html";
    }else{
        alert("senha ou email errados");
    }
   


});

