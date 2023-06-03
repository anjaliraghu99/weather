
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0ebb0c4b94mshfb70c553e47fa47p1728cejsn89d19ee0d8f3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather=(city)=>{
	cityName.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");
