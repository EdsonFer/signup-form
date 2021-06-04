
const data = [
   firstname = document.querySelector("#firstname"),
   lastname = document.querySelector("#lastname"),
   email = document.querySelector("#email"),
   password = document.querySelector("#password")
]

const btn = document.querySelector(".main__subscribe__btn");

// Mostrar o erro
const showError = (input => {
   input.style.removeProperty('border');
   input.classList.add('error--hide');
   input.parentElement.querySelector('ion-icon').classList.add('error--hide');
   input.parentElement.querySelector('p').classList.add('error--hide');
})

// Mostrar sucesso
const showSuccess = (input => {
   input.classList.remove('error--hide');
   input.style.border = "5px solid #4C7BF3";
   input.parentElement.querySelector('ion-icon').classList.remove('error--hide');
   input.parentElement.querySelector('p').classList.remove('error--hide');
})

// checa se os campos estão vazios
const isEmpty = (input => {
   input.value.length <= 1 ? showError(input) : showSuccess(input);
})

// Verificar o email
const checkEmail = (email => {
   let emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   if (isEmpty(email) || !emailPattern.test(email.value.trim())) {
      showError(email)
   } else { showSuccess(email) }
})

// Verifica os campos quando usuário envia o formulário
btn.addEventListener('click', (e) => {
   e.preventDefault();
   isEmpty(firstname)
   isEmpty(lastname)
   isEmpty(password)
   checkEmail(email)
})

// Verifica o campo quando o usuário clica fora
firstname.onblur = () => { isEmpty(firstname) };
lastname.onblur = () => { isEmpty(lastname) };
password.onblur = () => { isEmpty(password) };
email.onblur = () => { checkEmail(email) };