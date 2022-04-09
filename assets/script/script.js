// Acceptance Criteria
// GIVEN a weather dashboard with form inputs

// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
    
//function that collect user input and display in search history
function addResult(){

    inputCity = document.getElementById("myInput").value;  
    var searchCity =$("<div>") 
    searchCity.attr('id',inputCity) 
    searchCity.text(inputCity) 
    $(".history").append(searchCity)
    //console.log(inputCity)
}; 

//add event listener to search history item
$(".history").on('click', function(event){
    event.preventDefault();
     document.getElementById("myInput").value =  event.target.id;
    getResult(); 
});

//add event listner to search button
document.getElementById("searchBtn").addEventListener("click", addResult);
document.getElementById("searchBtn").addEventListener('click', getResult);

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
function getResult(){   

   inputCity = document.getElementById("myInput").value;   
    var countryCode='US';    
    var cityCode=inputCity;       
    
    var geoLon;   
    var geoLat;
        
    var cityName =$("<h>")    
    var temp = $("<div>")    
    var wind = $("<div>")    
    var humidity = $("<div>")   
    var uvIndex = $("<div>")  
    var icon =$("<img>")
    icon.addClass("icon");    
    var dateTime = $("<div>")

   
    $(".city").append(cityName)    
    $(".city").append(dateTime)    
    $(".city").append(icon)    
    $(".city").append(temp)    
    $(".city").append(wind)    
    $(".city").append(humidity)    
    $(".city").append(uvIndex)
    
    
    var geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityCode + "," + countryCode + "&limit=5&appid=7d1b285353ccacd5326159e04cfab063"
        
    //We then pass the requestUrl variable as an argument to the fetch() method, like in the following code:    
      fetch(geoUrl)
    
        //Convert the response into JSON. Lastly, we return the JSON-formatted response, as follows:
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
            console.log(data)
            weatherIcon= data.current.weather[0].icon;
            imgSrc = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
            icon.attr('src',imgSrc)
        
            cityName.text(cityCode);
            temp.text("Temperature: "+ data.current.temp + " F");
            humidity.text("Humidity: " + data.current.humidity + " %");
            wind.text("Wind Speed: " + data.current.wind_speed + " MPH");
            uvIndex.text("UV Index: " + data.current.uvi);
            // console.log(data.current.uvi)
                
            var date = new Date(data.current.dt * 1000);
            dateTime.text("("+ (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + ")");
          })
    })
}


// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
