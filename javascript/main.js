console.log('we are live');

console.log('its working')

let travel = document.getElementById('travel_fashion');
travel.addEventListener('click', function(){
    location = travel.getAttribute('href');
    location = 'pages/travel_fashion.html';
})

console.log(window.onkeydown);