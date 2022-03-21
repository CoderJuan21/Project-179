let latitude = 40.712776, longitude = -74.005974;
mapboxgl.accessToken = 'pk.eyJ1IjoianVhbm56IiwiYSI6ImNsMHJicmsxMjAxemozcXF3ZWlmZ3F0NW8ifQ.4gwk-5edixoQmMES0Zcq0Q'
var map = new mapboxgl.Map({
    container:"map",
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:16
});

$(document).ready(function(){
	alert("PLEASE LET ME KNoW YOUR LOCATION")
	initGeolocation()
});

$(function(){
	$("#navigate-button").click(function(){
		window.location.href = `ar_weather.html?source=${latitude};${longitude}& destination = ${destination[1]};${destination[0]}`
	})
});

function initGeolocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success)
	}
	else{
		alert("SORRY YOUR BOWSER DOESNT SUPPORT YOUR locaciones")
	}
};

function success(position){
	longitude = position.coords.longitude
	latitude = position.coords.latitude
	console.log(position)
	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 16
	});   


map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:false,
    })
);
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
);
}

var img1 = document.querySelector("#ny")

var marker1 = new mapboxgl.marker({
    element:img1
})
.setLngLat([74.0060,40.7128])
.addTo(map);