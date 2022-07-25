let cityInput = document.getElementById('city-input').value;
const submitBtn = document.getElementsByClassName('btn-primary')[0];
const divWeather = document.getElementById('weather-details')
var country2;


submitBtn.addEventListener('click', () => {
  divWeather.innerHTML = '';

  cityInput = document.getElementById('city-input').value

  document.getElementById('city-input').value = titleCase(cityInput)
  cityInput = cityInput.toLowerCase().split(',')[0]
  fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.toLowerCase() + '&appid=daa772f5693c7cb6303ee768a285ab75')
    .then(response => response.json())
    .then(data =>  {
      getWeatherData(data)
    })


    });


document.querySelector('#city-input').addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    submitBtn.click();
  }
});

function getWeatherData(data) {

if (data == false) {
  const cityNotFoundMsg = document.createElement('p');
  cityNotFoundMsg.classList.add('citynotfoundmsg');
  cityNotFoundMsg.textContent = 'City not found! Please type a valid city!';
  divWeather.appendChild(cityNotFoundMsg)
  } else {

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data3 =>  {
      var country = {};
      for(var i = 0; i<data3.length; i++) {

          country[data3[i]['cca2']] = data3[i]['name']['official'];
      }
      // getCountryFull()
      const country2 = country[data[0].country];

      const city = data[0].name + ', ' + data[0].state + ', ' + titleCase(country2)
      console.log(city);
      const lat = data[0].lat;
      const lon = data[0].lon;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=daa772f5693c7cb6303ee768a285ab75&units=metric`)
          .then(response => response.json())
          .then(data2 =>  {
            putWeatherData(data2,city)
          });



    });

  }
}



function putWeatherData(data2, city) {
  console.log(data2);
  var imgUrl = "http://openweathermap.org/img/wn/" + data2.weather[0].icon + "@2x.png";
  var temperature = Math.round(parseInt(data2.main.temp));

  temperature = temperature + ' Degrees Celsius'
  console.log(temperature)
  var description = titleCase(data2.weather[0].description)

  const cityElement = document.createElement('h1')
  cityElement.textContent = city

  const imgElement = document.createElement('img')
  imgElement.src = imgUrl

  const temperatureElement = document.createElement('h3')
  temperatureElement.textContent = 'Temperature: ' + temperature

  const descElement = document.createElement('h3');
  descElement.textContent = 'Description: ' + description

  divWeather.appendChild(cityElement);
  divWeather.appendChild(imgElement);
  divWeather.appendChild(temperatureElement);
  divWeather.appendChild(descElement);

}

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
}



console.log(getCountryFull('CA'));
function getCountryFull(cc) {
  var country = {};

  console.log(cc);
console.log(returnCountryFull(country,cc));
}

function returnCountryFull(country,cc) {
  return country
}
