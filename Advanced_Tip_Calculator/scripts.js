const numberOfPeople = document.getElementById("numberOfPeople"); 

const calculateBill = () => {
    // ** Calculate the total bill per person **
    const billTotalInput = document.getElementById("billTotalInput");
    const tipInput = document.getElementById("tipInput");
    const perPersonTotal = document.getElementById("perPersonTotal"); 

    const billTotal = Number(billTotalInput.value);
    const tip = Number(tipInput.value)/100;
    const numberOfPeople_ = Number(numberOfPeople.textContent);

    perPersonTotal.textContent= `$${((billTotal + billTotal*tip)/numberOfPeople_).toFixed(2)}`;
}

const increasePeople = () => {
    // ** Splits the bill between more people **
    numberOfPeople.textContent++;
    calculateBill();
}

const decreasePeople = () => {
    // ** Splits the bill between fewer people **
    if(numberOfPeople.textContent > 1)
    {
        numberOfPeople.textContent--;
        calculateBill();
    }
    else return;
}
