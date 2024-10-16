document.getElementById('show-add-money-button')
.addEventListener('click', function(event){
    event.preventDefault();

});

document.getElementById('show-add-money-button')
.addEventListener('click', function(){
    showSectionbyId('add-money-form');
});

document.getElementById('Show-cash-out-button')
.addEventListener('click', function(){
    showSectionbyId('cash-out-form');
});

document.getElementById('show-tranjection-button')
.addEventListener('click', function(){
    showSectionbyId('Tranjection-section');
})

document.getElementById('show-send-money-button')
.addEventListener('click', function(){
    showSectionbyId('send-money-form');
})