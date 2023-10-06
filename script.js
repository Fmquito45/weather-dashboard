var searchInputEl = document.getElementById("search-input");
var searchButtonEl = document.getElementById("search-button");

var cityEl = document.getElementById("city");

// var dateEls = [
//     document.getElementById("date"),
//     document.getElementById("date1"),
//     document.getElementById("date2"),
//     document.getElementById("date3"),
//     document.getElementById("date4"),
//     document.getElementById("date5"),
// ]

// var iconEls = [
//     document.getElementById("icon"),
//     document.getElementById("icon1"),
//     document.getElementById("icon2"),
//     document.getElementById("icon3"),
//     document.getElementById("icon4"),
//     document.getElementById("icon5")
// ]

// var tempEls = [
//     document.getElementById("temp"),
//     document.getElementById("temp1"),
//     document.getElementById("temp2"),
//     document.getElementById("temp3"),
//     document.getElementById("temp4"),
//     document.getElementById("temp5")
// ]

// var windEls = [
//     document.getElementById("wind"),
//     document.getElementById("wind1"),
//     document.getElementById("wind2"),
//     document.getElementById("wind3"),
//     document.getElementById("wind4"),
//     document.getElementById("wind5"),
// ]

// var humidEls = [
//     document.getElementById("humid"),
//     document.getElementById("humid1"),
//     document.getElementById("humid2"),
//     document.getElementById("humid3"),
//     document.getElementById("humid4"),
//     document.getElementById("humid5"),
// ]

var apiKey = "f1857ee728cff532cf0b670e7ef214c4";

// function to fetch data for lat and lon on city searched
function getLocation(input) {
    console.log("City searched", input);
    var cityUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + input + "&appid=" + apiKey;
    console.log(cityUrl);
    fetch(cityUrl).then(function (data) {
        return data.json();
    }).then(function (data) {
        console.log(data);
        var lat = data[0].lat;
        var lon = data[0].lon;
        getWeather(lat, lon)
    });
}
// function to fetch data for forecast 
function getWeather(lat, lon) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+apiKey+"&units=imperial"
    console.log(weatherUrl);
    fetch(weatherUrl).then(function(data) {
        return data.json();
    }).then(function(data) {
        console.log(data);
        forecastDisplay(data);
    })
}

function forecastDisplay(data) {
    var city = data.city.name;
    console.log(city);
    var indexs = [0,8,16,24,32,39];
    console.log(indexs.length);
    var dates = [];
    var temps = [];
    var winds = [];
    var humids = [];
    
    for (let i=0; i<indexs.length; i++){
        dates[i] = data.list[indexs[i]].dt_txt;
        console.log("dates", dates[i]);
        temps[i] = data.list[indexs[i]].main.temp;
        console.log("temps", temps[i]);
        winds[i] = data.list[indexs[i]].wind.speed;
        console.log("winds", winds[i]);
        humids[i] = data.list[indexs[i]].main.humidity;
        console.log("humids", humids[i]);
    };

    cityEl.textContent = city


}

searchButtonEl.addEventListener("click", function() {
    var cityInput = searchInputEl.value;
    //console.log(cityInput)
    getLocation(cityInput);
})



