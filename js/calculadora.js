window.addEventListener('load', () =>{ /* Escuchamos cuando se carga el documento */
    /*creamos dos constantes y nos guardamos los elementos que necesitamos */
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /*creamos otra constante para convertir el HTMLColection a Array */
    const keypadButtonsArray = Array.from(keypadButtons);

    /* Iteramos por nuestro nuevo array de botones */
    keypadButtonsArray.forEach((button) =>{

        /*A cada boton le agregamos un listener */
        button.addEventListener('click', ()=>{
            calculadora(button, display);
        })

    })
});

function calculadora(button, display){
    switch(button.innerHTML){
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
  display.innerHTML =  eval( display.innerHTML); /* tomar el string y resolverlo */
}

function actualizar(display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    /* display,innerHTML = display.innerHTML + button.innerHTML */
}

function borrar(display){
    display.innerHTML = 0;
}