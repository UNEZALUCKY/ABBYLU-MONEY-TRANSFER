function convertCurrency() {

    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let amount = document.getElementById("amount").value;

    if (amount === "" || isNaN(amount)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    const exchangeRates = {
        "RWF_INR": 0.0598, // 1 RWF = 0.0588 INR
        "INR_RWF": 14.782,   // 1 INR = 14.94 RWF
    };

    let conversionKey = `${fromCurrency}_${toCurrency}`;
    let rate = exchangeRates[conversionKey];

    if (rate) {
        let convertedAmount = amount * rate;
        document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById("result").innerHTML = "The currencies you have selected are not supported.";
    }
}
