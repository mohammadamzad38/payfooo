function getinputfieldvaluebyid(id){
    const inputvalue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputvalue);
    
    return inputNumber;
}

function getTextInputValueById (id){
    const textvalue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textvalue);
    return textNumber;
}

function showSectionbyId (id){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('Tranjection-section').classList.add('hidden')
    document.getElementById('send-money-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden');
}