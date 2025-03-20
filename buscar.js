document.getElementById("buscar").addEventListener("input", onInputChange);

    

function onInputChange(){
    let inputText = document.getElementById("buscar").value.toString().toLowerCase();
    let mostrar = document.getElementById("listaNombres");
    let tableRows = mostrar.getElementsByTagName("tr");
    for(let i=0; i<tableRows.length; i++){
        let textoConsulta = tableRows[i].cells[1].textContent.toString().toLowerCase();
        if(textoConsulta.indexOf(inputText) === -1){
tableRows[i].style.visibility = "collapse";
        }else{
            tableRows[i].style.visibility = "collapse";

        }
    }
}
    