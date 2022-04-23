var toggle=0;

let x=document.getElementById("search");
let y=document.getElementById("nav");

var map = L.map('map', { zoomControl: false }).setView([43.5, -79.3], 11);
map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
    ));

var likeThumb = L.icon({
    iconUrl: './img/marker-green.png',
    iconSize: [40, 60], 
});


var dislikeThumb = L.icon({
    iconUrl: './img/marker-red.png',
    iconSize: [40, 60], 
});

var locationMarker = L.icon({
    iconUrl: './img/userLocation.png',
    iconSize: [120, 120]
});


document.getElementById("darkmode").onclick=function(){
    
    if(toggle===0){
    toggle=1;
    x.style.background="grey";
    y.style.background="grey";
    map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    className: 'map-tiles'
    }
    ));
}
else{
    toggle=0;
    x.style.background="rgb(209, 242, 255)";
    y.style.background="rgb(209, 242, 255)";
    map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
        ));   
}
}
L.marker([43.61, -79.65], {icon: locationMarker}).addTo(map);
L.marker([43.667, -79.4], {icon: likeThumb}).addTo(map);
L.marker([43.6705, -79.40615], {icon: dislikeThumb}).addTo(map);
L.marker([43.7705, -79.20615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6505, -79.40615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6105, -79.60615], {icon: dislikeThumb}).addTo(map);
L.marker([43.62095, -79.8049], {icon: likeThumb}).addTo(map);
L.marker([43.6505, -79.40615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6105, -79.60615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6209, -79.80498], {icon: likeThumb}).addTo(map);
L.marker([43.6505, -79.40615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6105, -79.60615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6209, -79.80498], {icon: likeThumb}).addTo(map);
L.marker([43.6505, -79.41615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6105, -79.62615], {icon: dislikeThumb}).addTo(map);
L.marker([43.6209, -79.84498], {icon: likeThumb}).addTo(map);
L.marker([43.61, -79.61], {icon: dislikeThumb}).addTo(map);
L.marker([43.63, -79.62], {icon: dislikeThumb}).addTo(map);
L.marker([43.64, -79.63], {icon: likeThumb}).addTo(map);
L.marker([43.64, -79.64], {icon: dislikeThumb}).addTo(map);
L.marker([43.64, -79.65], {icon: likeThumb}).addTo(map);
L.marker([43.64, -79.66], {icon: dislikeThumb}).addTo(map);
L.marker([43.63, -79.67], {icon: likeThumb}).addTo(map);
L.marker([43.62, -79.68], {icon: dislikeThumb}).addTo(map);
L.marker([43.61, -79.69], {icon: likeThumb}).addTo(map);
