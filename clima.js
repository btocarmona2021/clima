const nombre_ciudad = document.querySelector('#ciudad');
const APIkey= '01636d001887534b6e93e7b78bd7f1c2';
const part = '';
const buscar = document.querySelector('#buscar');
const KELVIN = 273.15;

buscar.addEventListener('click',()=>{

    if (nombre_ciudad.value != ''){
    const ciudad = nombre_ciudad.value;
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}`;

    fetch(url).then(async (response)=>{
        console.log(url)
        if (response.status != 404){
            const respuesta =await response.json();
            document.querySelector('.ciudad').textContent=respuesta.name;
            document.querySelector('.latitud').textContent=`Latitud: ${respuesta.coord.lat}`;
            document.querySelector('.longitud').textContent=`Longitud: ${respuesta.coord.lon}`;
            document.querySelector('.temperatura').textContent=`Temperatura: ${(respuesta.main.temp - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.sensacion').textContent=`Sensación: ${(respuesta.main.feels_like - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.temp_minima').textContent=`Mínima: ${(respuesta.main.temp_min - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.temp_maxima').textContent=`Máxima: ${(respuesta.main.temp_max - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.presion').textContent=`Presión: ${respuesta.main.pressure}`;
            document.querySelector('.humedad').textContent=`Humedad: ${respuesta.main.humidity} %`;
            document.querySelector('.visibilidad').textContent=`Visibilidad: ${respuesta.visibility / 1000} Km`;
            document.querySelector('.velocidad').textContent=`Velocidad: ${respuesta.wind.speed} km/h`;
            document.querySelector('.direccion').textContent=`Dirección: ${respuesta.wind.deg}`;
            document.querySelector('.rafagas').textContent=`Ráfagas: ${respuesta.wind.gust} km/h`;

        }else{
            alert('no se encontro la ciudad')
            nombre_ciudad.value = '';
        }
    }).catch((error)=>{
        console.log(error)
    })

    }else{

    }


})






// fetch(url).then(async response => {
//     const datos = await response.json();
//
//
// })