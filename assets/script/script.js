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

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index


// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
