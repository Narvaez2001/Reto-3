const nav = document.querySelector('nav')
const iconOpen = document.getElementById('icon-open');
const listheader = document.querySelector('.list--header');
const iconClose = document.getElementById('icon-close');


nav.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scroll', window.scrollY > 0)
});

console.log(iconOpen);

iconOpen.addEventListener('click', () => {
    listheader.classList.add('list--header-show')   
});

iconClose.addEventListener('click', () => {
   listheader.classList.remove('list--header-show') 
});


$(function () {

    var fondoClaro = true
    $("#btnBlancoNegro").click(function () {
        if (fondoClaro === true) {// if(fondoClaro){
            $("#equipo").css("background-color", "#333333")
                .css("color", "#FFFFFF");
            fondoClaro = false;
        }
        else {
            $("#equipo").css("background-color", "#FFFFFF")
                .css("color", "#333333");
            fondoClaro = true;
        }
    });
    



    $("#valores article").click(function () {
        console.log($(this).css("background-color"))
        if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
            $(this).css("background-color", "rgba(255,255,255,0.3)")
            // $(this) hace referencia la objeto que recibió el evento
        }
        else {
            $(this).css("background-color", "rgba(0, 0, 0, 0)")
        }

    })

    $("#valores h2 span").click(function () {
        $("#valores article").css("background-color", "rgba(0, 0, 0, 0)");
    })

    $("section").each(function () {
        let titulo = $(this).find("h2").html();
        console.log(titulo);
        $("#menu-main").append(titulo);
    })

})