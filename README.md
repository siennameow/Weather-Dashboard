# Weather-Dashboard
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/Weather-Dashboard/blob/main/LICENSE)

## Description 📝 

Factoring weather into your travel is difficult, but important. We are here to help you make more confident and informed decisions. The application leverages [OpenWeather API](https://openweathermap.org/api) to pull weather and forecast informaton for cities across the US and provides updated weather data and forecasting to help you anticipate and prepare for your trip. 

Enter in your city of choice and select search to view the current weatherand forecast for the next five(5) days.UV Index will be accompanied by a color indicating the severity of the index. Previous searches are saved in localStorage and search historys are available as buttons in order for easy access and re-searching of weather and forecasts.

The webpage is easy for you to access through one link : https://siennameow.github.io/Weather-Dashboard/ and is designed to work with different screen sizes as you need.

Plan your trip now using Weather Dashboard!


## Table of Contents 📖

* [Webpage Preview ⭐](#webpage-preview-)
* [Code-Snippet 💻](#code-snippet-)
* [Features 📋](#custom-features-)
* [Skill-Improved 📚](#skill-improved-)
* [Technologies 🔧](#technologies-)
* [License 📜](#license-)
* [Authors 👩](#authors-)
* [Credits 🙌](#credits-)

## Webpage Preview ⭐

![weather](https://user-images.githubusercontent.com/101283174/171314918-6da98e4c-4f31-4b5b-b9ef-e4dc4fa2bed6.png)

## Features 📋

- Searched for a city, the current and future conditions for that city will be presented and that city is added to the search history
- The current weather conditions for the city including:
    - City name
    - Date
    - An icon representation of weather conditions
    - Temperature
    - Humidity
    - Wind speed
    - UV index
- The UV index is presented with a color indicating severity (reference: https://en.wikipedia.org/wiki/Ultraviolet_index)
    - 🟩  0-2 Low
    - 🟨  3-5 Moderate
    - 🟧  6-7 High 
    - 🟥  8-10 Very High
    - 🟪  11+ Extreme
- 5-day forecast will be presented with the following information:
    - Date
    - An icon representation of weather conditions
    - Temperature
    - Humidity
- When a city in the search history is clicked, the current and future conditions for that city is presented again
- When the weather dashboard is opened, the last searched city forecast is presented

## Code-Snippet 💻

JavaScript

Function to use fetch() method to retrive data from [OpenWeather API](https://openweathermap.org/api).

```JavaScript
var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityCode + "," + countryCode + "&limit=5&appid=7d1b285353ccacd5326159e04cfab063"

fetch(geoUrl)
    
.then(function (response) {
     return response.json();
})
    
.then(function (data) {
    geoLon = data[0].lon;
    geoLat = data[0].lat;
    
    //use geoLat and geoLon to fetch the current weather
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + geoLat + "&lon="+ geoLon + "&exclude=minutely,hourly,alerts&units=imperial&appid=7d1b285353ccacd5326159e04cfab063";
            
    fetch(weatherUrl)

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
 
        weatherIcon= data.current.weather[0].icon;
        imgSrc = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
        icon.attr('src',imgSrc)
        
         cityName.text(cityCode);
        //translate utc to date
        var date = new Date(data.current.dt * 1000);
        dateTime.text("("+ (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + ")");

        temp.text("Temperature: "+ data.current.temp + " F");
        humidity.text("Humidity: " + data.current.humidity + " %");
        wind.text("Wind Speed: " + data.current.wind_speed + " MPH");
```


Function that collect user input and display in search history

```JavaScript
function addResult(){

    inputCity = document.getElementById("myInput").value;  
    historyList = getInfo();
    var searchCity =$("<div>") 
    searchCity.attr('id',inputCity) 
    searchCity.text(inputCity) 
    searchCity.addClass("h4")

    
    if (historyList.includes(inputCity) === false){
        $(".history").append(searchCity)
    }
    $(".subtitle").attr("style","display:inline")
    addInfo(inputCity);
    
}; 

//add event listener to search history item
$(".history").on('click', function(event){
    event.preventDefault();
    $(".subtitle").attr("style","display:inline")
     document.getElementById("myInput").value =  event.target.id;
    getResult(); 
});
```

## Skill Improved 📚
✔️ Server Side APIs\
✔️ Open Weather API\
✔️ Bootstrap\
✔️ Font Awesome\
✔️ jQuery


## Technologies 🔧

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [jQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)

## License 📜
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/siennameow/Weather-Dashboard/blob/main/LICENSE)

## Authors 👩

* **Sienna Li** 

- [Portfolio](#)
- [Github](https://github.com/siennameow)
- [LinkedIn](https://www.linkedin.com/in/hexuanli/)


## Credits 🙌

Thanks to the following people who helped me in this project:
- Jerome Chenette
- Manuel Nunes
- Vince Lee
