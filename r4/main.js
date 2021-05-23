document.addEventListener('DOMContentLoaded',()=>{
let btnCargar = document.querySelector('.btn')
let aviso = document.querySelector('.aviso')
let table  = document.querySelector('.table')
btnCargar.addEventListener('click',async()=>{
    aviso.innerHTML = "cargando..."
    try{
        let url = "https://jsonplaceholder.typicode.com/users";
        let r = await fetch(url)
        let json = r.json();
        let html = "";


            let tBody = document.querySelector(".table");
            tBody.innerHTML = "";
            console.log("skere");
            for (let i = 0; i < json.users.length; i++) {
                insertarTablaJson(json.users[i]);
            }
            aviso.innerHTML = "Se cargo con exito!";
    }catch(e){
        aviso.innerHTML = "ERORR"
    }
    
})
})