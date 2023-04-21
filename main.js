
// ------- Botones de eleccion de vehiculo ---------

localStorage.clear()
let contenedorA = document.getElementById("contenedorA");
let vehiculos = [
  { id: 1, nombre:"Automovil", precio: 1000 },
  { id: 2, nombre:"Pick up", precio: 1500 },
  { id: 3, nombre:"Camion", precio: 2500 },
  { id: 4, nombre:"Motocicleta", precio: 700 },
];

const elecVh = (id) => {
  let vehiculo = vehiculos.find((item) => item.id === id);
  let vhSelec = {nombre: vehiculo.nombre, precio: vehiculo.precio};
  let vhJSON = JSON.stringify(vhSelec);
  localStorage.setItem(`vehiculo_${id}`, vhJSON);
};

let div = document.createElement("div");

div.innerHTML = `
  <h2 class = "d-flex titudos">Seleccione el vehículo a cotizar</h2>
`;

contenedorA.append(div);

vehiculos.forEach((vehiculo) => {
  let boton = document.createElement("button");
  boton.innerText = vehiculo.nombre;
  boton.id = vehiculo.id;
  boton.className = "botones";
  boton.addEventListener("click",() => elecVh(vehiculo.id),
/*   Toastify({
    text: "This is a toast",
    duration: 5000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast() */
  
  div.append(boton));
});

// ------- Botones de eleccion de coberturas ---------

let contenedorB = document.getElementById("contenedorB");
let coberturas = [
  { id: 1, nombre:"Cobertura A", precio: 1000 },
  { id: 2, nombre:"Cobertura B", precio: 1500 },
  { id: 3, nombre:"Cobertura C", precio: 2500 },
  { id: 4, nombre:"Cobertura D", precio: 4500 },
];
const elecCob = (id) => {
  let cobertura = coberturas.find((item) => item.id === id);
  let cobSelec = {nombre: cobertura.nombre, precio: cobertura.precio};
  let cobJSON = JSON.stringify(cobSelec);
  localStorage.setItem(`cobertura_${id}`, cobJSON);
};

let article1 = document.createElement("article1");
article1.innerHTML = `
  <h2 class = "titudos">Elija la cobertura que prefiere cotizar</h2>
`;

contenedorB.append(article1);

coberturas.forEach((cobertura) => {
  let boton = document.createElement("button");
  boton.innerText = cobertura.nombre;
  boton.id = cobertura.id;
  boton.className ="botones";
  boton.addEventListener("click", () => elecCob(cobertura.id));

  article1.append(boton);
});

// ------- Botones de eleccion de adicionales ---------

let contenedorC = document.getElementById("contenedorC");
let adicionales = [
  { id: 1, nombre:"Cristales", precio: 1000 },
  { id: 2, nombre:"Robo de Ruedas", precio: 1500 },
  { id: 3, nombre:"Granizo Parcial", precio: 2500 },
  { id: 4, nombre:"Granizo Total", precio: 4500 },
  { id: 5, nombre:"Auxilio y Grua", precio: 1500 },
  { id: 6, nombre:"Sin Adicionales", precio: 0 },
];
const elecAdic = (id) => {
  let adicional = adicionales.find((item) => item.id === id);
  let adicSelec = {nombre: adicional.nombre, precio: adicional.precio};
  let adicJSON = JSON.stringify(adicSelec);
  localStorage.setItem(`adicional_${id}`, adicJSON);
};

let article2 = document.createElement("article2");
article2.innerHTML = `
  <h2 class = "titudos">Puede elegir agregar alguno de los siguientes adicionales</h2>
`;

contenedorC.append(article2);

adicionales.forEach((adicional) => {
  let boton = document.createElement("button");
  boton.innerText = adicional.nombre;
  boton.id = adicional.id;
  boton.className ="botones";
  boton.addEventListener("click", () => elecAdic(adicional.id));

  article2.append(boton);
  }
);
// -------  Comienza cotizador según la elección --------

let cotiza = document.getElementById("cotiza");
cotiza.addEventListener("click", () => {
  const mostrarElec = () => {
    let vehiculo, cobertura, adicional;
    let cotizaSelec = [];
    for (let i = 0; i < localStorage.length; i++) {
      let clave = localStorage.key(i);
      if (clave.includes("vehiculo_")) {
        let selecJSON = localStorage.getItem(clave);
        vehiculo = JSON.parse(selecJSON);
      } 
      else if (clave.includes("cobertura_")) {
        let selecJSON = localStorage.getItem(clave);
        cobertura = JSON.parse(selecJSON);
      } 
      else if (clave.includes("adicional_")) {
        let selecJSON = localStorage.getItem(clave);
        adicional = JSON.parse(selecJSON);
      }
      console.log(cotizaSelec);
    }
    return {vehiculo, cobertura, adicional};
  }

  const { vehiculo, cobertura, adicional } = mostrarElec();
  const cotizacionTotal = parseFloat(vehiculo.precio) + parseFloat(cobertura.precio) + parseFloat(adicional.precio);

   let contenedor = document.getElementById("contenedorD");
   contenedor.innerHTML = `
     <p className = "titudos2"> Se seleccionó cotizar: ${vehiculo.nombre} Con una: ${cobertura.nombre}<br>
      Se incluyó un adicional de: ${adicional.nombre}<br>
      El precio total de la cotización es: $${cotizacionTotal}</p>
   `;
    contenedor.append(contenedor); 
  }

//  --------  Boton de Nueva Cotización ------
)
let nuevaCot = document.getElementById("nuevaCot"); 
nuevaCot.addEventListener("click", () => {
  let limpia = document.getElementById("contenedorD");
    limpia.parentNode.removeChild(limpia);
    location.reload();
  }
)
console.log(nuevaCot);

// ----- Inicia formulario -----

let formulario = document.getElementById("formuCont");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
      let elEmail = document.getElementById("ingrEmail");
        if (elEmail.value.includes("@")) {
        console.log("arroba");
        } else {
        elEmail.value = "";
        const errorMensaje = document.createElement('p');
        errorMensaje.textContent = 'Por favor ingrese un correo electrónico válido'; 
        formulario.appendChild(errorMensaje);
      }
    });