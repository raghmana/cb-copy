function calulatePriceOfItem1() {
    let item = document.getElementById("item1Cost");
    let itemCost = document.getElementById("item1Cost").getAttribute("data-price");
    let noOfItems = document.getElementById("item1costCatcher").value;
    let updatedCost = itemCost * noOfItems;
    item.innerText = updatedCost;
    updateTotalCost();
}
function calulatePriceOfItem2() {
    let item = document.getElementById("item2Cost");
    let itemCost = document.getElementById("item2Cost").getAttribute("data-price");
    let noOfItems = document.getElementById("item2costCatcher").value;
    let updatedCost = itemCost * noOfItems;
    item.innerText = updatedCost;
    updateTotalCost();
}
function calulatePriceOfItem3() {
    let item = document.getElementById("item3Cost");
    let itemCost = document.getElementById("item3Cost").getAttribute("data-price");
    let noOfItems = document.getElementById("item3costCatcher").value;
    let updatedCost = itemCost * noOfItems;
    item.innerText = updatedCost;
    updateTotalCost();
}

function updateTotalCost() {
    let item1Price = document.getElementById("item1Cost").innerText;
    let item2Price = document.getElementById("item2Cost").innerText;
    let item3Price = document.getElementById("item3Cost").innerText;
    console.log(item1Price);
    let totalCost = parseFloat(item1Price) + parseFloat(item2Price) + parseFloat(item3Price);
    let cost = document.getElementById("cost");
    let fee = document.getElementById("deliveryFee");
    let totalPrice = document.getElementById("totalCost");
    cost.innerText = totalCost.toFixed(2);
    fee.innerText = (totalCost*0.15).toFixed(2);
    totalPrice.innerText = (totalCost + (totalCost*0.15)).toFixed(2);
}