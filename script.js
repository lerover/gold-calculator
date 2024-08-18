let gramInputTag = document.getElementById("gramInput");
let salePriceInputTag = document.getElementById("salePriceInput");
let currentPriceInputTag = document.getElementById("currentPriceInput");
let calBtnTag = document.getElementById("calBtn");

// console.log(gramInputTag,salePriceInputTag,currentPriceInputTag,calBtnTag);

//result Tag
let itemBoldOneTag = document.getElementById("itemBoldOne");
let itemBoldTwoTag = document.getElementById("itemBoldTwo");
let itemBoldThreeTag = document.getElementById("itemBoldThree");

// console.log(itemBoldOneTag,itemBoldTwoTag,itemBoldThreeTag);

calBtnTag.addEventListener("click", function (e) {
    e.preventDefault();
    let gramInputTagValue = gramInputTag.value;
    let salePriceInputValue = salePriceInputTag.value;
    let currentPriceInputValue = currentPriceInputTag.value;

    // console.log(gramInputTagValue,salePriceInputValue,currentPriceInputValue);

    

    let gramToPaeValue = eval(gramInputTagValue / 1.0205);

    let paeToKyatTharr = eval(gramToPaeValue / 16);

    let goldPrice = eval(paeToKyatTharr * currentPriceInputValue);

    let handPrice = eval(salePriceInputValue - goldPrice);

    //result
    itemBoldOneTag.textContent = gramToPaeValue.toFixed(2);
    itemBoldTwoTag.textContent = goldPrice.toFixed(2);
    itemBoldThreeTag.textContent = handPrice.toFixed(2);



})



