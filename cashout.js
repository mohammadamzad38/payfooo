document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getinputfieldvaluebyid('input-cash-out');
    const cashoutpinNumber = getinputfieldvaluebyid('input-cash-out-pin');

    if(isNaN(cashOut)){
        alert ('Input Ammount')
        return;
    }

    
    
    if(cashoutpinNumber === 123){
        const balance = getTextInputValueById('account-balance');

        if(cashOut > balance){
            alert ('You do not have enough money.')
            return;
        }

        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        const cashOutHistry = document.createElement('div')
        cashOutHistry.classList.add('bg-red-400');
        cashOutHistry.innerHTML= `
           <h4 class="text-md font bold p-2">Cash Out</h4>
           <p>${cashOut} Withdrow. New Balance ${newBalance} </p>
        `
        document.getElementById('Tranjection-container').appendChild(cashOutHistry)
    }
    else{
        alert('No money for you | DGM')
    }
})
