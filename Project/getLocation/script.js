const button = document.getElementById('get-location')
const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTem = document.getElementById('city-tem')

// button.addEventListener('click' , async() => {
//     // navigator.geolocation.getCurrentPosition(success, error)
//     const value = navigator.geolocation.getCurrentPosition(() => {
//         console.log('success');
//     } , 
//     () => {
//         console.log('error');
//     })
// })

async function gotLocation(position){
   const result = await getData(position.coords.latitude, position.coords.longitude)
   cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
   cityTime.innerText = `${result.current.last_updated}`
   cityTem.innerText = `${result.current.temp_c}  °C`
   console.log(result);
}

function failedToGet() {
    console.log('There was some issue');
}

button.addEventListener('click',() => {
    const value = navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})

async function getData(lat, long){
    const promise = await  fetch(`http://api.weatherapi.com/v1/current.json?key=2127a5e9314b45a787e150740240502&q=${lat},${long}&aqi=yes`)
    return await promise.json()
  }
