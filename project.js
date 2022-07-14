var latitude;
var longitude;
var destination;

$(document).ready(function () {
  alert("Please allow ur device location");
  initGeolocation();
});
function initGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position);
  } else {
    alert("sorry , your brower does not support geolocation");
  }
}
$(function () {
  $("#navigate-button").click(function () {
    window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`;
  });
});
function position(e) {
  longitude = e.coords.longitude;
  latitude = e.coords.latitude;
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhdGhlZXJ0aCIsImEiOiJjbDMydG9oY3oxYWQwM3Bwc2Fsdno3c2UyIn0.WOShnHZ-CicyxQIjJbQzQQ";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/navigation-night-v1",
    center: [longitude, latitude],
    zoom: 8,
  });
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    }).on("result", function (e) {
      destination = e.result.center;
    })
  );

  var img = document.querySelector("#taj-mahal");
  var img1 = document.querySelector("#lotus-temple");
  var img2 = document.querySelector("#humpi");
  var img3 = document.querySelector("#golden-temple");

  var marker1 = new mapboxgl.Marker({
    element: img,
  })

    .setLngLat([78.0421, 27.1751])
    .addTo(map);

  var marker2 = new mapboxgl.Marker({
    element: img1,
  })

    .setLngLat([77.259132, 28.553558])
    .addTo(map);

  var marker3 = new mapboxgl.Marker({
    element: img2,
  })

    .setLngLat([76.46, 15.335])
    .addTo(map);

  var marker4 = new mapboxgl.Marker({
    element: img3,
  })

    .setLngLat([74.8765, 31.62])
    .addTo(map);
}
