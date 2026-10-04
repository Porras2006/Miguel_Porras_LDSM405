function autos() {
    var modelo=document.getElementById('modelo').value;
    alert(modelo);
    var color=document.getElementById('color').value;
    alert(color);
    var imagen=document.getElementById('imagen').value;
    alert(imagen);
    var activo=document.getElementById('activo').value;
    alert(activo);
}

function escuderia(){
    var nombre=document.getElementById('nombre').value;
    alert(nombre);
    var descripcion=document.getElementById('descripcion').value;
    alert(descripcion);
}

function corredor(){
    var nombre=document.getElementById('nombre').value;
    alert(nombre);
    var a_paterno=document.getElementById('a_paterno').value;
    alert(a_paterno);
    var a_materno=document.getElementById('a_materno').value;
    alert(a_materno);
    var edad=document.getElementById('edad').value;
    alert(edad);
    var genero=document.getElementById('genero').value;
    alert(genero);
    var imagen=document.getElementById('imagen').value;
    alert(imagen);
}

function relaciones() {
    var auto = document.getElementById('auto').value;
    var corredor = document.getElementById('corredor').value;
    alert(auto + " es la Escuderia de " + corredor);
    var piloto_1 = document.getElementById('piloto_1').value;
    var piloto_2 = document.getElementById('piloto_2').value;
    alert(piloto_1 + " es compañero de " + piloto_2);
}