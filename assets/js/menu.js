const nav = document.querySelector('.nav');
let formation = document.getElementById("formation-text");

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY > 0)
    }) 


function selectButton(buttonIndex) {
    const buttons = document.getElementsByClassName("btn-formacion");
    const divs = document.getElementsByClassName("formation-div");
    
    // Desactivar la clase "selected" en todos los botones
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
            
    // Activar la clase "selected" en el botón seleccionado
    buttons[buttonIndex - 1].classList.add("selected");
    
    for (let i = 0; i < divs.length; i++) {
        if (i === buttonIndex - 1) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    selectButton(1);
  });