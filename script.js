var searchInputEl = document.getElementById("search-input");
var searchButtonEl = document.getElementById("search-button");
var cityEl = document.getElementById("city");

var dateEls = [
    document.getElementById("date"),
    document.getElementById("date1"),
    document.getElementById("date2"),
    document.getElementById("date3"),
    document.getElementById("date4"),
    document.getElementById("date5"),
]

var iconEls = [
    document.getElementById("icon"),
    document.getElementById("icon1"),
    document.getElementById("icon2"),
    document.getElementById("icon3"),
    document.getElementById("icon4"),
    document.getElementById("icon5")
]

var tempEls = [
    document.getElementById("temp"),
    document.getElementById("temp1"),
    document.getElementById("temp2"),
    document.getElementById("temp3"),
    document.getElementById("temp4"),
    document.getElementById("temp5")
]

var windEls = [
    document.getElementById("wind"),
    document.getElementById("wind1"),
    document.getElementById("wind2"),
    document.getElementById("wind3"),
    document.getElementById("wind4"),
    document.getElementById("wind5"),
]

var humidEls = [
    document.getElementById("humid"),
    document.getElementById("humid1"),
    document.getElementById("humid2"),
    document.getElementById("humid3"),
    document.getElementById("humid4"),
    document.getElementById("humid5"),
]

var apiKey = f1857ee728cff532cf0b670e7ef214c4

searchButtonEl.addEventListener("click", function() {
    var cityInput = searchInputEl.value;
})



