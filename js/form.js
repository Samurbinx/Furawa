function getAll() {
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let description = document.getElementById("description").value;
    
    let flag = true;

    if (name.value == "") {
        name.nextSibling.innerHTML = "Campo obligatorio";
        flag = false;
    } else {
        name.nextSibling.innerHTML = "";
    }

    if (lastname.value == "") {
        lastname.nextSibling.innerHTML = "Campo obligatorio";
        flag = false;

    } else {
        lastname.nextSibling.innerHTML = "";
    }

    //Validar email
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	if(!validEmail.test(email.value) ){
        email.nextSibling.innerHTML = "Correo electrónico no válido";
        flag = false;
	} else {
        email.nextSibling.innerHTML = "";
    }


    if (phone.value.length != 9) {
        phone.nextSibling.innerHTML = "Número de teléfono no válido";
        flag = false;
    } else {
        phone.nextSibling.innerHTML = "";
    }

    if (flag) {
        name.value = "";
        lastname.value = "";
        email.value = "";
        phone.value = "";
        description.value = "";
        alert("Mensaje enviado correctamente. \nLe contestaremos lo antes posible a través de su correo electrónico.")
    }
}