function changes() {
    //Total
    let input1 = document.querySelector("#input-1");
    let total = document.querySelector("#total");
    let price = document.querySelector("#price");
    let result = price.textContent * input1.value;
    total.innerHTML = `$${result}`;

    // Cantidad
    let amount = document.querySelector("#amount");
    amount.innerHTML = input1.value;


    // Color
    let input2 = document.querySelector("#input-2");
    let circleColor = document.querySelector("#colors");
    circleColor.style.backgroundColor = input2.value;
}