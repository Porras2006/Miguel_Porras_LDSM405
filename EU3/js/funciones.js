function dibujarOcho() {
  const patronOcho = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ];

  const caracteres = [" ", "s"];
  let salida = "";

  for (let i = 0; i < patronOcho.length; i++) {
    for (let j = 0; j < patronOcho[i].length; j++) {
      let valor = patronOcho[i][j];
      salida += caracteres[valor] + " ";
    }
    salida += "\n";
  }

  document.getElementById("resultadoOcho").innerText = salida;
}

let alumnos = [];

function mostrarAlumnos() {
  let contenido = "";
  for (let i = 0; i < alumnos.length; i++) {
    contenido += `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${alumnos[i]}</span>
                    <span class="badge bg-secondary rounded-pill">Posición ${i}</span>
                  </li>`;
  }
  document.getElementById("listaAlumnos").innerHTML = contenido;
}

function capturarAlumnos() {
  alumnos = [];
  for (let i = 0; i < 10; i++) {
    let nombre = prompt(`Ingrese el nombre del alumno ${i + 1}:`);
    alumnos.push(nombre);
  }
  mostrarAlumnos();
}

function eliminarRango() {
  let inicio = parseInt(document.getElementById("inicio").value);
  let fin = parseInt(document.getElementById("fin").value);
  
  let cantidad = fin - inicio + 1;

  alumnos.splice(inicio, cantidad);
  
  mostrarAlumnos();
}

function vaciarPorNombre() {
  let nombreBuscar = document.getElementById("nombreVaciar").value;

  for (let i = 0; i < alumnos.length; i++) {
    let coincide = Number(alumnos[i] === nombreBuscar);
    let valores = [alumnos[i], ""]; 
    alumnos[i] = valores[coincide];
  }
  mostrarAlumnos();
}

let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let horas = ["", "", "", "", "", "", ""];
let eventos = ["", "", "", "", "", "", ""];
let descripciones = ["", "", "", "", "", "", ""];

function actualizarVista() {
  let filas = "";
  for (let i = 0; i < diasSemana.length; i++) {
    let diaCapitalizado = diasSemana[i].charAt(0).toUpperCase() + diasSemana[i].slice(1);
    
    filas += `<tr>
                <td class="fw-bold text-primary">${diaCapitalizado}</td>
                <td>${horas[i]}</td>
                <td>${eventos[i]}</td>
                <td>${descripciones[i]}</td>
              </tr>`;
  }
  document.getElementById("vistaAgenda").innerHTML = filas;
}

function guardarEvento() {
  let diaSeleccionado = document.getElementById("dia").value;
  let h = document.getElementById("hora").value;
  let e = document.getElementById("evento").value;
  let d = document.getElementById("descripcion").value;

  for (let i = 0; i < diasSemana.length; i++) {
    let esElDia = Number(diasSemana[i] === diaSeleccionado);
    
    let opcionesHora = [horas[i], h];
    let opcionesEvento = [eventos[i], e];
    let opcionesDesc = [descripciones[i], d];

    horas[i] = opcionesHora[esElDia];
    eventos[i] = opcionesEvento[esElDia];
    descripciones[i] = opcionesDesc[esElDia];
  }

  actualizarVista();
}