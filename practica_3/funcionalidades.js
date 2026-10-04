function autos() {
    var modelo=document.getElementById('modelo').value;
    alert("El modelo es: " + modelo);
    var color=document.getElementById('color').value;
    alert("El color es: " + color);
    var imagen=document.getElementById('imagen').value;
    alert("Esta es su imagen: " + imagen);
    var activo=document.getElementById('activo').value;
    alert("Esta Activo: " + activo);
}

function escuderia(){
    var nombre=document.getElementById('nombre').value;
    alert("La escuderia es: " + nombre);
    var descripcion=document.getElementById('descripcion').value;
    alert("Descripcion: " + descripcion);
}

function corredor(){
    var nombre=document.getElementById('nombre').value;
    alert("Su nombre es: " + nombre);
    var a_paterno=document.getElementById('a_paterno').value;
    alert("Su apellido paterno es: " + a_paterno);
    var a_materno=document.getElementById('a_materno').value;
    alert("Su apellido materno es: " + a_materno);
    var edad=document.getElementById('edad').value;
    alert("Su edad es: " + edad);
    var genero=document.getElementById('genero').value;
    alert("Su genero es: " + genero);
    var imagen=document.getElementById('imagen').value;
    alert("Esta es su foto: " + imagen);
}

function relaciones() {
    var auto = document.getElementById('auto').value;
    var corredor = document.getElementById('corredor').value;
    alert(auto + " es la Escuderia de " + corredor);
    var piloto_1 = document.getElementById('piloto_1').value;
    var piloto_2 = document.getElementById('piloto_2').value;
    alert(piloto_1 + " es compañero de " + piloto_2);
}