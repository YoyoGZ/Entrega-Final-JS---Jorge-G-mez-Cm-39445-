// // ---- Fetch para Json local -------

// fetch("./datos.json")
//  .then(response => response.json())
//  .then(data => {
//      data.forEach (nuevaInfo => {
//         console.log(nuevaInfo);
//         masInfo = data.find(item => item.id === elecCob(cobertura.id));
//       if (masInfo) {
//         const infoText = document.getElementById("infoText");
//         infoText.innerText = `${masInfo.nombre}: ${masInfo.texto}`
//         console.log(nuevaInfo); 
//     }});
// });

// let listado = document.getElementById("listado");

// fetch("./data.json")
// .then(response => response.json())
// .then(data => {
//   data.forEach(producto => {
//     const div = document.createElement("div");
//     div.classList.add("col-sm-4", "col");
//     div.innerHTML = 
//       <div class="card mb-3">
//         <div class="card-body">
//           <h2 class="card-title">${producto.nombre}</h2>
//           <p class="card-text">${producto.precio}</p>
//           <a href="#" class="btn btn-primary">Comprar</a>
//         </div>
//       </div>
//     ;

//     listado.append(div);
//   });
// })