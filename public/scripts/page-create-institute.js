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

let marker;

//create and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove ico
    marker && map.removeLayer(marker)

    //add icon layer 
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

//adiconar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {

    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach( function(button){
        button.classList.remove('active')
    })

    //colocar a class .active nesse botão selecionado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input hidden com o valor selicionado
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}

function validate(event){
    // validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }

}