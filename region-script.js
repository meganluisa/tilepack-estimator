const tilebelt = require('@mapbox/tilebelt');
const cover = require('@mapbox/tile-cover');
const geojsonArea = require('@mapbox/geojson-area');
const levels = {
  0: {
    index: 0,
    min_zoom: 0,
    max_zoom: 5
  },
  1: {
    index: 6,
    min_zoom: 6,
    max_zoom: 10
  },
  2: {
    index: 11,
    min_zoom: 11,
    max_zoom: 14
  },
  3: {
    index: 12,
    min_zoom: 15,
    max_zoom: 16
  }
};

const tozooms = (level) => {
    return {min_zoom: levels[level].index, max_zoom: levels[level].index};
};

const tiles = [];

const texas = {"type":"Polygon","coordinates":[[[-77.496468,38.343552],[-76.594528,38.533371],[-76.219078,38.96537],[-76.516388,39.337452],[-76.764473,39.39423],[-77.496468,39.44136],[-77.760468,39.1297],[-77.946732,38.905365],[-77.792473,38.670483],[-77.636467,38.658051],[-77.496468,38.343552]]]}		;

console.log(texas)      
const region = texas;
tiles.push(region);
console.log(tiles)
let highZoomArea = 0;

let ct = 0;
for (let level = 0; level <= 3; level++) {
    const overlapping = cover.tiles(region, tozooms(level));
    console.log(overlapping);
    for (t of overlapping) {
        const tileGeoJson = tilebelt.tileToGeoJSON(t);
        console.log(t)
        highZoomArea += geojsonArea.geometry(tileGeoJson);
        if (level == 2 || level == 3)
            tiles.push(tilebelt.tileToGeoJSON(t));
        ct++;
    }
}

let ct0 = 0;
for (let level = 0; level = 0; level++) {
    const overlapping = cover.tiles(region, tozooms(level));
    for (t of overlapping) {
        const tileGeoJson = tilebelt.tileToGeoJSON(t);
        // console.log(t)
        highZoomArea += geojsonArea.geometry(tileGeoJson);
        if (level == 2 || level == 3)
            tiles.push(tilebelt.tileToGeoJSON(t));
        ct0++;
    }
}

let ct1 = 0;
for (let level = 1; level = 1; level++) {
    const overlapping = cover.tiles(region, tozooms(level));
    for (t of overlapping) {
        const tileGeoJson = tilebelt.tileToGeoJSON(t);
        // console.log(t)
        highZoomArea += geojsonArea.geometry(tileGeoJson);
        if (level == 2 || level == 3)
            tiles.push(tilebelt.tileToGeoJSON(t));
        ct1++;
    }
}

let ct2 = 0;
for (let level = 0; level <= 2; level++) {
    const overlapping = cover.tiles(region, tozooms(level));
    for (t of overlapping) {
        const tileGeoJson = tilebelt.tileToGeoJSON(t);
        // console.log(t)
        highZoomArea += geojsonArea.geometry(tileGeoJson);
        if (level == 2 || level == 3)
            tiles.push(tilebelt.tileToGeoJSON(t));
        ct2++;
    }
}


console.log('total tile count', ct,'0', ct0,'1', ct1,'2', ct2);
// tiles // shows the map

// console.log('high zoom tile area (Sqkm)', highZoomArea / 1000000);

// console.log(geojsonArea.geometry(region) / 1000 / 1000, "sq km");