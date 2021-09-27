const fullName = document.getElementById("full_name"),
      email = document.getElementById("email"),
      phone = document.getElementById("phone"),
      form = document.getElementById("data_form"),
      errorElement = document.getElementById("error");


form.addEventListener('submit', (e) =>{
    let regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let regexName =  /^[А-Яа-яЁё]+(\s+[А-Яа-яЁё]+)+$/;
    let messages = [];
    //ФИО
    if (fullName.value === "" || fullName.value === null || fullName.value.length < 5 ){
        messages.push("Введите полное ФИО");
    }
    else if(!regexName.test(fullName.value)){
        messages.push('Введите коректное ФИО');
    }

    //номер телефона
    if (phone.value === "" || phone.value === null ){
        messages.push("Введите ФИО");
    }
    else if (!regexPhone.test(phone.value)){
        messages.push('Неверный номер телефон');
    }

    //эл.почта
    if (email.value === "" || email.value === null ){
        messages.push("Введите электронную почту");
    }
    else if (!regexEmail.test(email.value)){
        messages.push('Неверная электронная почта');
    }
    //работа с message
    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    } else {
        errorElement.innerText = '';
    }   
})