let formation = document.getElementById("formation__name");

function selectButton(buttonIndex) {
    const buttons = document.getElementsByClassName("formacion__listado-btn");
    const divs = document.getElementsByClassName("formation__name");
    
    // Desactivar la clase "selected" en todos los botones
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
    }
            
    // Activar la clase "selected" en el botón seleccionado
    buttons[buttonIndex - 1].classList.add("selected");
    
    for (let i = 0; i < divs.length; i++) {
        if (i === buttonIndex - 1) {
            divs[i].style.display = "flex";
        } else {
            divs[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    selectButton(1);
  });