const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#senha")
const jobSelect = document.querySelector("#job")
const messegeTextarea = document.querySelector("#messege")

form.addEventListener("submit", (event) =>{
event.preventDefault();

  //verifica se o nome está vazio
  if(nameInput.value ==="") {
    alert("Por favor digite seu nome");
    return;
  }

   // Verificar se o e-mail está preenchido e se é valido
   if(emailInput.value ==="" || !isEmailVlid(emailInput.value)) {
    alert("Por favor preencha seu email");
    return;
   }

   //Verificar se está preenchido
   if(!validatePassword(passwordInput.value, 8)) {
      alert("A senha precise ter no minino 8 dígitos.");
      return
   }

  // se todos os campos estiverem corretamente preenchidos, envie o form
  form.submit();
});

// Função que valida e-mail
function isEmailVlid(email) {

   // cria uma regex para validar email
   const emailRegex = new RegExp(
     // usuario13@host.com.br (email exmplo)
     // validando o e-mail 
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
   );

   if(emailRegex.test(email)) {
    return true;
   }

   return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
        // senha válida
        return true

    }

    // Senha inválida
    return false
}

