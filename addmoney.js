document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    
    const addmoney = getinputfieldvaluebyid('input-add-money');
    const pinNumber = getinputfieldvaluebyid('input-pin-number');

    if(isNaN(addmoney)){
        alert('Input Amount');
        return;
    }
    
    if(pinNumber === 123){
        const balance = getTextInputValueById('account-balance');
        const newbalance = balance + addmoney;
        
        document.getElementById('account-balance').innerText = newbalance;

        const tranjection = document.createElement('p');
        tranjection.innerText = `added: ${addmoney} Tk. New Balance: ${newbalance}`;

        document.getElementById('Tranjection-container').appendChild(tranjection)
    }
    else{
        alert ("invalid input");
    }
});