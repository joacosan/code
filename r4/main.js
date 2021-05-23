document.addEventListener('DOMContentLoaded',()=>{
let btnCargar = document.querySelector('.btn');
let aviso = document.querySelector('.aviso');
let url = "http://web-unicen.herokuapp.com/api/groups/grupo33/Menu/";
btnCargar.addEventListener('click',async()=>{
    aviso.innerHTML = "cargando..."
    try {
        aviso.innerHTML = "Cargando tabla..";
        let r = await fetch(url);
        let json = await r.json();
        if (json.Menu.length > 0) {
            let tBody = document.getElementById("table-body");
            tBody.innerHTML = "";
            console.log("skere");
            for (let i = 0; i < json.Menu.length; i++) {
                insertarTablaJson(json.Menu[i]);
            }
            aviso.innerHTML = "Se cargo con exito!";
        } else {
            aviso.innerHTML = "La Tabla esta vacia";
        }
    } catch (e) {
        aviso.innerHTML = "Fallo el cargado de la tabla";
    }
});
    function insertarTablaJson(menu) {
        let tBody = document.getElementById("table-body");
        let tRow = tBody.insertRow(0);
        let tCell1 = tRow.insertCell(0),
        tCell2 = tRow.insertCell(1),
        tCell3 = tRow.insertCell(2),
        tCell4 = tRow.insertCell(3),
        tCell5 = tRow.insertCell(4);

        tRow.id = menu._id;

        tCell1.id = "celdaEvent";
        tCell2.id = "celdaEvent";
        tCell3.id = "celdaEvent";
        tCell4.id = "celdaEvent";
        tCell5.id = "celdaEvent";

        tCell1.innerHTML = menu.thing.cantidadCarnes;
        tCell2.innerHTML = menu.thing.quesoElegido;
        tCell3.innerHTML = menu.thing.verduraElegida;
        tCell4.innerHTML = menu.thing.aderezoElegido;
        tCell5.innerHTML = menu.thing.mailCreador;
    }
});