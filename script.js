
const cvsInfo = [
        {nombre: "Carlos Chavez", edad: 24, sexo: "Hombre", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Viridiana Rivera", edad: 30, sexo: "Mujer", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Berenice Hernandez", edad: 35, sexo: "Mujer", ocupacion: "Desarrollador", nivelEstudios: "Universidad"},
        {nombre: "Pedro Luna", edad: 22, sexo: "Hombre", ocupacion: "Auxiliar", nivelEstudios: "Preparatoria"},
        {nombre: "Paola Vazquez", edad: 31, sexo: "Mujer", ocupacion: "Administrador", nivelEstudios: "Secundaria"},
        {nombre: "Cristian Nuñez", edad: 35, sexo: "Hombre", ocupacion: "Financiero", nivelEstudios: "Universidad"},
        {nombre: "Oscar Lopez", edad: 30, sexo: "Hombre", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Gabriela Montes", edad: 23, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Daniela Osla", edad: 25, sexo: "Mujer", ocupacion: "Financiero", nivelEstudios: "Universidad"},
        {nombre: "Mario Fernandez", edad: 24, sexo: "Hombre", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Olivia Rivera", edad: 36, sexo: "Mujer", ocupacion: "Auxiliar", nivelEstudios: "Secundaria"},
        {nombre: "Isaac Sanchez", edad: 35, sexo: "Hombre", ocupacion: "Cajero", nivelEstudios: "Preparatoria"},
        {nombre: "Liliana Fuentes", edad: 30, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Margatita Pinto", edad: 25, sexo: "Mujer", ocupacion: "Administrador", nivelEstudios: "Prepartoria"},
        {nombre: "Moises Reyes", edad: 27, sexo: "Hombre", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Fernando Duran", edad: 22, sexo: "Hombre", ocupacion: "Financiero", nivelEstudios: "Universidad"},
        {nombre: "Karla Buendia", edad: 29, sexo: "Mujer", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Eduardo Grande", edad: 36, sexo: "Hombre", ocupacion: "Desarrollador", nivelEstudios: "Universidad"},
        {nombre: "Hugo Trinidad", edad: 35, sexo: "Hombre", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Esmeralda Flores", edad: 34, sexo: "Mujer", ocupacion: "Auxiliar", nivelEstudios: "Secundaria"},
        {nombre: "Rosa Lima", edad: 25, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Meredith Gomez", edad: 28, sexo: "Mujer", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Raul Huerta", edad: 23, sexo: "Hombre", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Samuel Santos", edad: 25, sexo: "Hombre", ocupacion: "Auxiliar", nivelEstudios: "Preparatoria"},
        {nombre: "Yamileth Hernandez", edad: 30, sexo: "Mujer", ocupacion: "Desarrollador", nivelEstudios: "Universidad"},
        {nombre: "Luis Oman", edad: 35, sexo: "Hombre", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Paola Islas", edad: 38, sexo: "Mujer", ocupacion: "Administrador", nivelEstudios: "Universidad"},
        {nombre: "Gustavo Cuevas", edad: 28, sexo: "Hombre", ocupacion: "Auxiliar", nivelEstudios: "Universidad"},
        {nombre: "Jimena Flores", edad: 24, sexo: "Mujer", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Tomas Hurtado", edad: 31, sexo: "Hombre", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Mariana Arriega", edad: 25, sexo: "Mujer", ocupacion: "Economista", nivelEstudios: "Universidad"},
        {nombre: "Laura Valdes", edad: 29, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Monserrat Lazcano", edad: 23, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Miguel Montes", edad: 31, sexo: "Hombre", ocupacion: "Administrador", nivelEstudios: "Universidad"},
        {nombre: "Ulises Arenas", edad: 35, sexo: "Hombre", ocupacion: "Cajero", nivelEstudios: "Preparatoria"},
        {nombre: "Ivan rivera", edad: 28, sexo: "Hombre", ocupacion: "Cajero", nivelEstudios: "Universidad"},
        {nombre: "Francisco Jimenez", edad: 29, sexo: "Hombre", ocupacion: "Desarrollador", nivelEstudios: "Universidad"},
        {nombre: "Melina Chavez", edad: 22, sexo: "Mujer", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Emilio Carmona", edad: 35, sexo: "Hombre", ocupacion: "Cajero", nivelEstudios: "Secundaria"},
        {nombre: "Pablo Sesma", edad: 26, sexo: "Hombre", ocupacion: "Contador", nivelEstudios: "Universidad"},
        {nombre: "Monica Fuentes", edad: 27, sexo: "Mujer", ocupacion: "Financiero", nivelEstudios: "Universidad"},
        {nombre: "Juan Torres", edad: 30, sexo: "Hombre", ocupacion: "Economista", nivelEstudios: "Universidad"},
        {nombre: "Andrea Montiel", edad: 39, sexo: "Mujer", ocupacion: "Economista", nivelEstudios: "Universidad"},
        {nombre: "Isabel Islas", edad: 32, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Alejandro Brunete", edad: 26, sexo: "Hombre", ocupacion: "Abogado", nivelEstudios: "Universidad"},
        {nombre: "Nancy Rosas", edad: 34, sexo: "Mujer", ocupacion: "Auxiliar", nivelEstudios: "Universidad"},
        {nombre: "Rebeca Gutierrez", edad: 33, sexo: "Mujer", ocupacion: "Financiero", nivelEstudios: "Universidad"},
        {nombre: "Sandra Agua", edad: 24, sexo: "Mujer", ocupacion: "Financiero", nivelEstudios: "Universidad"},
        {nombre: "Nora Torres", edad: 26, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"},
        {nombre: "Fernanda Guerra", edad: 30, sexo: "Mujer", ocupacion: "Ingeniero", nivelEstudios: "Universidad"}
        
    ];

    function mostrarNombres() {
        const tablaNombres = document.getElementById("listaNombres");
        let row = document.createElement("tr");

        cvsInfo.forEach((cvsInfos, index) => {
            const col = document.createElement("td");
            const nombre = document.createElement("button");
            nombre.textContent = cvsInfos.nombre;
            nombre.onclick = function() {
                mostrarInfo(index);
            };
            col.appendChild(nombre);

            if (index % 2 === 0 && index > 0) {
                tablaNombres.appendChild(row);
                row = document.createElement("tr");
            }

            row.appendChild(col);
        });

        tablaNombres.appendChild(row);
    }

    function mostrarInfo(index) {
        const infoDiv = document.getElementById("masInformacion");
        infoDiv.classList.remove("hidden");
        const cvsInfos = cvsInfo[index];

        document.getElementById("nombre").textContent = "Nombre: " + cvsInfos.nombre;
        document.getElementById("edad").textContent = "Edad: " + cvsInfos.edad;
        document.getElementById("sexo").textContent = "Sexo: " + cvsInfos.sexo;
        document.getElementById("ocupacion").textContent = "Ocupación: " + cvsInfos.ocupacion;
        document.getElementById("nivelEstudios").textContent = "Nivel Estudios: " + cvsInfos.nivelEstudios;
    }

//    window.onload = mostrarNombres;   
    window.addEventListener("load",mostrarNombres);
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
    




