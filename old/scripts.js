const btnModalBuy = document.querySelector(".btn-buy");
const modalBuy = document.querySelector(".modal-buy");
const modalClose = document.querySelector(".close-modal");

const showModal = (modal) => {
    modal.classList.toggle("show");
}

btnModalBuy.addEventListener("click", () => {
    showModal(modalBuy);
});

modalClose.addEventListener("click", () => {
    showModal(modalBuy);
});

const stringForNumber = (string) => {
    const value = string.replace(",", ".");
    return Number(value).toFixed(2);
}

const getPriceMeter = (priceBox, sizeBox) => {
    const priceMeter = priceBox / sizeBox;
    return priceMeter;
}


const sizeBox = stringForNumber(document.querySelector("#meter-box").innerHTML);
const priceBox = stringForNumber(document.querySelector("#price-box").innerHTML);
const priceMeter = getPriceMeter(priceBox, sizeBox);

const inputBuy = document.querySelector("#input-buy");
const inputQuantity = document.querySelector("#input-quantity");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

inputBuy.value = priceBox;
inputQuantity.value = 1;

const updateQuantity = (currentPrice) => {
    const quantity = 1;
    const currentPriceMeter = priceMeter;
    console.log( currentPriceMeter, currentPrice)
}

const updatePrice = (currentQuantity) => {
    const currentPrice = (priceBox * currentQuantity).toFixed(2).replace(".", ",");
    inputBuy.value = currentPrice;
    updateQuantity(currentPrice);
}

plus.addEventListener("click", () => {
    inputQuantity.value = Number(inputQuantity.value) + 1;
    updatePrice(Number(inputQuantity.value));
});

minus.addEventListener("click", () => {
    Number(inputQuantity.value) === 1
    ? inputQuantity.value
    : inputQuantity.value = Number(inputQuantity.value) - 1;
    updatePrice(Number(inputQuantity.value));
});