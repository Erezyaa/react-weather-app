

var x = document.querySelector(".city-name");
var date = new Date();
var hour = date.getHours();


document.getElementById("btn-choice").addEventListener("click", function () {
    getWheater($("#city-input").val());
});

// Event handling for press Enter 
document.getElementById("city-input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        getWheater($("#city-input").val());
        console.log("asd");
        $("#city-input").val("");
    }
}, false);




function getWheater(city) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=3a04b53f7b6d2edbaad0c1e9b9d783f1",
        function (response) {
            console.log(response);
            var city2 = city;
            var country = response.sys.country;
            var wheater = response.weather[0].main;
            var temp = response.main.temp;
            var humidity = response.main.humidity;
            var pressure = response.main.pressure;
            var windSpeed = response.wind.speed;
            console.log(city2 + " " + country + " " + wheater + " " + temp + " " + humidity + " " + pressure + " " + windSpeed);
            wheaterSet(city2, country, wheater, temp, humidity, pressure, windSpeed);


        });
}

function wheaterSet(city, country, wheater, temp, humidity, pressure, windSpeed) {

    $("#city-info").html(city + " " + country);
    $("#wheat-info").html(wheater);
    $("#temp-info").html(temp + " &deg;C");
    $("#humidity-info").html(humidity + " %");
    $("#pressure-info").html(pressure + " hPa");
    $("#windSpeed-info").html(windSpeed + " m/s");
    $("#wheater-info").show();
    thunderstorm
}

