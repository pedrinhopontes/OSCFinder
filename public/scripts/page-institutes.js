// create map

var map = L.map('mapid').setView([-22.8681361,-43.4100327], 16);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
var icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 98],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){
    // create popup overlay
var popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent(`${name} <a href="/institute?id=${id}" class="choose-institutes"> <img src="/images/arrow-white.svg" > </a>`)

// create and add marker
L.marker([lat,lng], { icon })
.addTo(map)
.bindPopup(popup)
}

const institutesSpan = document.querySelectorAll('.institutes span')
institutesSpan.forEach( span => {
    const institutes = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(institutes)
})

