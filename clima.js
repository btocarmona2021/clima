const nombre_ciudad = document.querySelector('#ciudad');
const APIkey= '01636d001887534b6e93e7b78bd7f1c2';
const part = '';
const buscar = document.querySelector('#buscar');
const KELVIN = 273.15;

buscar.addEventListener('click',()=>{

    if (nombre_ciudad.value != ''){
    const ciudad = nombre_ciudad.value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}`;

    fetch(url).then(async (response)=>{
        console.log(url)
        if (response.status != 404){
            const respuesta =await response.json();
            document.querySelector('.ciudad').textContent=`${respuesta.name}`;
            document.querySelector('.latitud').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Latitud: ${respuesta.coord.lat}`;
            document.querySelector('.longitud').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Longitud: ${respuesta.coord.lon}`;
            document.querySelector('.temperatura').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Temperatura: ${(respuesta.main.temp - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.sensacion').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Sensación: ${(respuesta.main.feels_like - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.temp_minima').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Mínima: ${(respuesta.main.temp_min - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.temp_maxima').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Máxima: ${(respuesta.main.temp_max - KELVIN).toFixed(1)} Grados`;
            document.querySelector('.presion').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Presión: ${respuesta.main.pressure}`;
            document.querySelector('.humedad').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Humedad: ${respuesta.main.humidity} %`;
            document.querySelector('.visibilidad').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Visibilidad: ${respuesta.visibility / 1000} Km`;
            document.querySelector('.velocidad').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Velocidad: ${respuesta.wind.speed} km/h`;
            document.querySelector('.direccion').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Dirección: ${respuesta.wind.deg}`;
            document.querySelector('.rafagas').innerHTML=`<img class="icono2" src="./img/check-mark.svg" alt=""> Ráfagas: ${respuesta.wind.gust} km/h`;

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