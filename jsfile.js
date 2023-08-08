function calculateTotal() {
    var burgerQuantity = document.getElementById("burger-quantity").value;
    var pizzaQuantity = document.getElementById("pizza-quantity").value;
    var saladQuantity = document.getElementById("salad-quantity").value;
    var choleQuantity = document.getElementById("chole-quantity").value;

    var burgerTotal = parseFloat(burgerQuantity) * 60.00;
    var pizzaTotal = parseFloat(pizzaQuantity) * 100.00;
    var saladTotal = parseFloat(saladQuantity) * 30.00;
    var choleTotal = parseFloat(choleQuantity) * 50.00;

    document.getElementById("burger-total").innerHTML = "₹" + burgerTotal.toFixed(2);
    document.getElementById("pizza-total").innerHTML = "₹" + pizzaTotal.toFixed(2);
    document.getElementById("salad-total").innerHTML = "₹" + saladTotal.toFixed(2);
    document.getElementById("chole-total").innerHTML = "₹" + choleTotal.toFixed(2);

    var total = burgerTotal + pizzaTotal + saladTotal + choleTotal ;

    document.querySelector(".total").innerHTML = "Total : ₹" + total.toFixed(2);
}