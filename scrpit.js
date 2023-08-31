const kochibutton= document.getElementById("kochibutton");
kochibutton.addEventListener("click", function() {
    showweather(9.93, 76.26);
});
const chennaibtn= document.getElementById("chennaibtn");
chennaibtn.addEventListener("click", function() {
    showweather(13.067439, 80.237617);
});
const banglorebtn= document.getElementById("banglorebtn");
banglorebtn.addEventListener("click", function() {
    showweather( 12.97,77.59);
});
 const delhibtn =document.getElementById('delhibtn');
 delhibtn.addEventListener ('click',function(){
    showweather (28.679079,77.23149) ;
 });


function showweather(latitude, longitude) {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude='+latitude +'&longitude='+longitude+'&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m';

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(data => {
            const temperaturespan = document.getElementById('temperature');
            const temperature = data.current_weather.temperature;
            temperaturespan.innerHTML = temperature + "°C";
        })
        .catch(function(error) {
            console.log(error);
        });
}
