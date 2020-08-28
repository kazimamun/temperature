const inputValue = document.querySelector('#input');
const searchBtn = document.querySelector('#submit');
const image = document.querySelector('#displayImage');
const displayLocation = document.querySelector('#displayLocation');
const displayTemp = document.querySelector('#displayTemp');
const displayWeather = document.querySelector('#displayWeather');

//default 
fetchData('dhaka')

searchBtn.addEventListener('click',()=>{
    fetchData(inputValue.value);
})

function getData(data){
    image.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    displayLocation.textContent = data.name;
    displayTemp.innerText = data.main.temp;
    displayWeather.textContent = data.weather[0].main;
    inputValue.value= ''; 
}

function fetchData(location){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location},&units=metric&appid=40c397e71c26e7a06f799b7365f54a0c`)
        .then(res=>res.json())
        .then(data=>{
            getData(data);
        })
        .catch(err => alert('Wrong City Name'));
}