var requestInfo = {
    method: 'GET',
    redirect: 'follow',
  };

async function getData() {
    const urlApi = "https://api.covid19api.com/countries"

    const respuesta = await fetch(urlApi,requestInfo)
    const obtenerData = await respuesta.json();

    var paisesPorOrden = obtenerData.map(paises=> paises.Country).sort()
            let html= ` <option  value="selecciona pais">Selecciona País</option>`
            paisesPorOrden.forEach(pais => {
                html += `
                <option value= "${pais}"> ${pais}</option>
                `;   
                const select= document.querySelector("#country");
                select.innerHTML=html;
            });
           
           
} 
var fechas =""
function datosXPais(){
    
    let pais = document.querySelector("#country").value
    let fechaInicio = document.querySelector("#date").value
    let fechaFinal= document.querySelector("#finalDate").value
    let estado= document.querySelector("#status").value
    fetch(`https://api.covid19api.com/total/country/${pais}/status/${estado}?from=${fechaInicio}T00:00:00Z&to=${fechaFinal}T00:00:00Z`, requestInfo)
        .then(response => response.json())
        .then(result => {  
            fechas= result.map(rangoFechas=> rangoFechas.Date)
            return fechas
        })
        .catch(error => console.log('error', error));
    
    
}


getData()
export  {getData, datosXPais, fechas };
