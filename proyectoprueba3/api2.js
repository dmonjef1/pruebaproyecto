let statusArray2 = [];
let dateArray2 = [];

async function getData2() {
    const urlApi2 = "https://api.covid19api.com/dayone/country/chile/status/confirmed"

    const res = await fetch(urlApi2);

    const obtenerData2 = await res.json();

    const valores2 =  obtenerData2.map((x) => x.Cases);
    const fechas2 =  obtenerData2.map((x) => x.Date.split('T')[0]); 

    ///console.log(fechas2);
    
    dateArray2 = fechas2
    statusArray2 = valores2

}

getData2()
export {getData2, statusArray2, dateArray2}