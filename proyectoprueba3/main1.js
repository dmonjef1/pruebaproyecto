/*var requestInfo = {
    method: 'GET',
    redirect: 'follow',
  };
    
  fetch("https://api.covid19api.com/countries", requestInfo)
    .then(response => response.json())
    .then(respuesta => 
        { var paisesPorOrden = respuesta.map(paises=> paises.Country).sort()
            let html= ` <option  value="selecciona pais">Selecciona País</option>`
            paisesPorOrden.forEach(pais => {
                html += `
                <option value= "${pais}"> ${pais}</option>
                `;   
                const select= document.querySelector("#country");
                select.innerHTML=html;
            });
        })
    .catch(error => console.log('error', error))
*/
function datosXPais(){
    let datosOrdenados = []
    let pais = document.querySelector("#country").value
    let fechaInicio = document.querySelector("#date").value
    let fechaFinal= document.querySelector("#finalDate").value
    let estado= document.querySelector("#status").value
    fetch(`https://api.covid19api.com/total/country/${pais}/status/${estado}?from=${fechaInicio}T00:00:00Z&to=${fechaFinal}T00:00:00Z`, requestInfo)
        .then(response => response.json())
        .then(result => {
           result = datosOrdenados;
        })
        .catch(error => console.log('error', error));

}

