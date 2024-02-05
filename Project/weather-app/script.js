
const input = document.getElementById('city')
const button = document.getElementById('search-button')
const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTem = document.getElementById('city-tem')

async function getData(cityName){
  const promise = await  fetch(`http://api.weatherapi.com/v1/current.json?key=2127a5e9314b45a787e150740240502&q=${cityName}&aqi=yes`)

  return await promise.json()
}
button.addEventListener('click', async () =>{
    const value = input.value;
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTime.innerText = `${result.current.last_updated}`
})

