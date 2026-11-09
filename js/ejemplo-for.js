let formTabla=document.getElementById("formTabla");
let ListaTabla=document.getElementById("listaTabla");
formTabla.addEventListener("submit",generarTabla);

function generarTabla(evento){
    evento.preventDefault();
    let numero= parseInt(document.getElementById("numeroTabla").value);
    ListaTabla.innerHTML="";

    for (let i=1; i<=10; i++){
        let fila=document.createElement("li");
        fila.textContent = `${numero} x ${i} = ${numero * i}`;
        ListaTabla.appendChild(fila);
    }
}