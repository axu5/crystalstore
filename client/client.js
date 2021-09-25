mapboxgl.accessToken =
  "pk.eyJ1IjoiYXh1NSIsImEiOiJja3R3MXRqZTUyZzA5MnBwbnYxYms2azQ2In0.F8QdPD_tBkWuGDBC5qH65Q";
// @ts-ignore
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [14.481106479257642, 35.92691522821607],
  zoom: 15,
});
// pull request test