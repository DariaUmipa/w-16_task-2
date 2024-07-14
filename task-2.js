const form = document.forms.registrationForm;
const nameInput = form.elements.name;
const emailInput = form.elements.email;
const ageInput = form.elements.age;
const professionSelect = form.elements.profession;
const passwordInput = form.elements.password;
const agreeCheckbox = form.elements.agree;
const submitBtn = document.getElementById('submitBtn');
const errorNameMessage = document.getElementById('errorNameMessage');
const errorEmailMessage = document.getElementById('errorEmailMessage');
const errorAgeMessage = document.getElementById('errorAgeMessage');
const errorGendereMessage = document.getElementById('errorGenderMessage');
const errorSelectMessage = document.getElementById('errorSelectMessage');
const errorPasswordMessage = document.getElementById('errorPasswordMessage');
const errorAgreeMessage = document.getElementById('errorAgreeMessage');
 

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
   
//проверка Name
    if (!/^[А-Яа-я]{2,20}$/.test(nameInput.value)) {      
       errorNameMessage.textContent = "Некорректный формат имени(Имя должно содержать только буквы и пробелы и иметь длину 2-20 символов.)"
       isValid = false;
       errorNameMessage.style.color ="red";  
    }else{
        errorNameMessage.textContent = "";
    }

//проверка Email
    if (!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(emailInput.value)) {
       errorEmailMessage.textContent = 'Некорректный формат email';
       errorEmailMessage.style.color ="red";
       isValid = false;
      } else {            
        errorEmailMessage.textContent = '';
      }
  
  //проверка Age
    if ( ageInput.value <= 0) {
        errorAgeMessage.textContent = 'Некорректный возраст';
        errorAgeMessage.style.color ="red";
        isValid = false;       
      } else {
     
        errorAgeMessage.textContent = '';
      }
  //проверка Gender

      if (!document.querySelector('input[type="radio"][name="gender"]:checked') ) {
        errorGendereMessage.textContent = 'Вы не выбрали пол';
        errorGendereMessage.style.color ="red";
        isValid = false; 
      } else {  
        errorGendereMessage.textContent = '';
      };

   //проверка Profession

    if (professionSelect.value === 'nothing') {
        errorSelectMessage.textContent = 'Вы не выбрали профессию';
        errorSelectMessage.style.color ="red";
        isValid = false;   
      } else {     
        errorSelectMessage.textContent = '';
      };

    //проверка Password
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordInput.value) ) {
        errorPasswordMessage.textContent = 'Неправильный формат пароля(должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру)';
        errorPasswordMessage.style.color ="red";
        isValid = false; 
      } else {
        errorPasswordMessage.textContent = '';
      }
    //проверка Agree
    if (!agreeCheckbox.checked) {
        errorAgreeMessage.textContent = 'Вы должны согласиться с условиями';
       errorAgreeMessage.style.color ="red";
        isValid = false;   
    } else {
        
        errorAgreeMessage.textContent = ''; 
        
    }

    if (isValid) {
        
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Age:', ageInput.value);
        console.log('Gender:', document.querySelector('input[name="gender"]:checked').value);
        console.log('Profession:', professionSelect.value);
        console.log('Password:', passwordInput.value);
        form.reset();
        alert("Форма успешно отправлена")

}

   submitBtn.disabled = !isValid;

if (submitBtn.disabled = true ){
    submitBtn.classList.add('disabled');
}
else {
    submitBtn.disabled = false;
    submitBtn.classList.remove('disabled');  
}

});

  const inputFields = document.querySelectorAll('.input-field');

  inputFields.forEach(function(input) {
    input.addEventListener('focus', function () {
        input.style.outline = 'none' 
      input.style.border = '2px solid #be98e0'; 
    });
  
    input.addEventListener('blur', function () {
      input.style.border = ''; 
    });
  });





