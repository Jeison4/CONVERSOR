





let form= document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let dolar= 3781;
    let pesomex= 0,0054;
    let euro = 4395;
    let pesocol= 1;
    let resultado= 0;

    let valor= Number( document.getElementById("inputvalor").value);
    let de= document.getElementById("de").value;
    let a= document.getElementById("A").value;

    if(de==dolar&&a==pesocol){
        resultado= dolar/pesocol;
       }
       
       else if(de==pesomex&&a==pesocol){
           resultado=pesomex/pesocol;
       }
       else {
           resultado=valor;
    
       }  
       
       document.getElementById("resultados").value=resultado;
})
