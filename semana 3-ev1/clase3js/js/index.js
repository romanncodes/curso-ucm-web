var boton = document.getElementById("btn");
//var botonLimpiar = document.getElementById("btn_limpiar");


boton.addEventListener('click', ()=>{
    console.log("evento click");
    let input = document.getElementById("txt");
    // alert(`Hola ${input.value}`);
    let p = document.getElementById("resp");

    if(input.value.trim()==""){
        p.innerHTML='Completa el nombre';
        p.style.color="red";
        return;
    }
    p.innerHTML=`Hola ${input.value}`;
    p.style.color="green";

});

document.getElementById("btn_limpiar").addEventListener("click", ()=>{
    let input = document.getElementById("txt");
    let p = document.getElementById("resp");
    input.value="";
    p.innerHTML="";
    input.focus();
});
