let gramInputTag = document.getElementById("gramInput");
let salePriceInputTag = document.getElementById("salePriceInput");
let currentPriceInputTag = document.getElementById("currentPriceInput");
let calBtnTag = document.getElementById("calBtn");

//result Tag
let itemBoldOneTag = document.getElementById("itemBoldOne");
let itemBoldTwoTag = document.getElementById("itemBoldTwo");
let itemBoldThreeTag = document.getElementById("itemBoldThree");

calBtnTag.addEventListener("click", function () {
    let gramInputTagValue = gramInputTag.value;
    let salePriceInputValue = salePriceInputTag.value;
    let currentPriceInputValue = currentPriceInputTag.value;

    let gramToPaeValue = eval(gramInputTagValue / 1.0205);

    let paeToKyatTharr = eval(gramToPaeValue / 16);

    let goldPrice = eval(paeToKyatTharr * currentPriceInputValue);

    let handPrice = eval(salePriceInputValue - goldPrice);

    //result
    itemBoldOneTag.textContent = gramToPaeValue.toFixed(2);
    itemBoldTwoTag.textContent = goldPrice.toFixed(2);
    itemBoldThreeTag.textContent = handPrice.toFixed(2);



})

console.log(itemBoldOneTag.textContent);
console.log("Hello World");