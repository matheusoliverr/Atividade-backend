const modal_overlay = document.querySelector('.modal_overlay')
const cards = document.querySelectorAll('.card')
const modal_materials = document.querySelector('.modal_materials')
const iframe_content = document.querySelector('.iframe_content')

for(let card of cards){
    card.addEventListener("click", function(){
        const card_id = card.getAttribute('id')
        window.location.href = `/cards/${card_id}`
    })
}

