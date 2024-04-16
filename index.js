function abrir() {

    var container = document.head;

    document.getElementById('btn-aberto').style.opacity = 1;
    document.getElementById('aberto').style.opacity = 1;

    document.getElementById('fechado').style.opacity = 0;
    document.getElementById('fechar').style.opacity = 0;

}

function fechar() {

    document.getElementById('fechado').style.opacity = 1;
    document.getElementById('fechar').style.opacity = 1;

    document.getElementById('btn-aberto').style.opacity = 0;
    document.getElementById('aberto').style.opacity = 0;
   
}
