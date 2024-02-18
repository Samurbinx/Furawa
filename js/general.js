// POP-UPS
function iniciarSesion(){
    document.body.style.overflow = "hidden"  
    let popup = document.getElementById("popup")
    popup.style.display = "flex";

    let blur = document.getElementById("blur")
    blur.style.display = "flex";

    popup.innerHTML = `<div id="sesionForm">
                            <div class="tb">
                                <h1>INICIAR SESIÓN</h1>
                                <a onclick="closeSesion()"><img src="img/icons/B36x.png" alt=""></a>
                            </div>
                            <div class="form">
                                <input type="text" placeholder="Nombre de usuario" id="name">
                                <a href="" class="err">He olvidado mi usuario</a>

                                <input type="text" placeholder="Contraseña">
                                <a href="" class="err">He olvidado la Contraseña</a>

                                <button>ENTRAR</button>
                            </div>
                            <div class="tb">
                                <p>¿No tienes cuenta?</p>
                                <button onclick="registrarse()">REGISTRARSE</button>
                            </div>
                        </div>`

}

function registrarse(){
    document.body.style.overflow = "hidden"  
    let popup = document.getElementById("popup")
    popup.style.display = "flex";

    let blur = document.getElementById("blur")
    blur.style.display = "flex";

    popup.innerHTML = "";
    popup.innerHTML = `<div id="sesionForm">
                            <div class="tb">
                                <h1>REGISTRARSE</h1>
                                <a onclick="closeSesion()"><img src="img/icons/B36x.png" alt=""></a>
                            </div>
                            <div class="form">
                                <input type="text" placeholder="Nombre de usuario" id="username">
                                <a href="" class="err" id="usernameErr"></a>

                                <input type="text" placeholder="Ejemplo@gmail.com" id="email">
                                <a href="" class="err" id="emailErr"></a>

                                <input type="text" placeholder="Contraseña" id="pwd1">
                                <a href="" class="err" id="pwd1Err"></a>

                                <input type="text" placeholder="Repita contraseña" id="pwd2">
                                <a href="" class="err" id="pwd2Err"></a>

                                <button>CREAR CUENTA</button>
                            </div>
                            <div class="tb">
                                <p>¿Ya tienes cuenta?</p>
                                <button onclick="iniciarSesion()">INICIA SESIÓN</button>
                            </div>
                        </div>`
}

function closeSesion(){
    document.body.style.overflow = "visible"  

    let popup = document.getElementById("popup")
    popup.innerHTML = "";

    let blur = document.getElementById("blur")
    blur.style.display = "none";

    let sideDrop = document.getElementById("sideDrop")
    if (sideDrop.style.display == "flex") {
        sideDrop.style.animation = "sideDrop 2s reverse"
        sideDrop.style.display = "none"
    }

}

function desplegable() {
    document.body.style.overflow = "hidden"  
    let popup = document.getElementById("sideDrop")
    popup.style.display = "flex";
    popup.style.animation = "sideDrop 1s"

    let blur = document.getElementById("blur")
    blur.style.display = "flex";
}

function closeSD(){
    document.body.style.overflow = "visible"  
    let popup = document.getElementById("sideDrop")

    popup.style.animation = "sideDrop 2s reverse"
    popup.style.display = "none";

    let blur = document.getElementById("blur")
    blur.style.display = "none";
}

// -------------404---------------------------------------------------
let flashFlag = true;
setInterval(chImg, 3000)
function chImg(){
    let body = document.getElementById("body");
    if (flashFlag) {
        body.style.animation = "chImg 0.1s";
        flashFlag = false;
    } else {
        body.style.animation = "";
        flashFlag = true;
    }
}