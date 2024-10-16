document.getElementById('btn-Send-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const sendMoney = getinputfieldvaluebyid ('send-money-input');

    const pinInput = getinputfieldvaluebyid('send-pin-number');

    if(isNaN(sendMoney)){
        alert("InVallid Input")
        return;
    }

    if(pinInput === 123){
        const balance = getTextInputValueById('account-balance');

        if(sendMoney > balance){
            alert('Goribs loks')
            return;
        }
        const sendMoneyAmount = balance - sendMoney;
        document.getElementById('account-balance').innerText = sendMoneyAmount;

        const tranjection = document.createElement('p');
        tranjection.innerText = `Sended Amount: ${sendMoney} Tk. Current Balance ${sendMoneyAmount}`;

        console.log('hobe', tranjection)
        document.getElementById('Tranjection-section').appendChild(tranjection);
    }
    else{
        return('Mara Khao | DGM')
    }
})