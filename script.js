"use strict";
const priceFields = document.querySelectorAll('span[data-number]'),
      checkbox = document.querySelector('.check-label'),
      annualPrices = [199.99, 249.99, 399.99],
      monthPrices = [19.99, 24.99, 39.99];
let isChecked = false;




checkbox.addEventListener('click', () => {
    console.log(isChecked);
    
    if (!isChecked) {
        for (let i = 0; i < priceFields.length; i++) {
            priceFields[i].textContent = annualPrices[i];
        }
        isChecked = true;
    } else {
        for (let i = 0; i < priceFields.length; i++) {
            priceFields[i].textContent = monthPrices[i];
        }
        isChecked = false;
    }
    
});

