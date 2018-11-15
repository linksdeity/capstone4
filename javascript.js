
var pizza = {name:"Pizza", price: 1.25};
var burger = {name:"Burger", price: 1.75};
var television = {name:"Television", price: 899.99};
var candy = {name:"Candy", price: 0.75};

var items = [pizza, burger, television, candy];
var cost =[];

var selectedItem;
var price = 0.00;
var totalCost = 0.00;

for (i = 0; i < items.length; i++)
{
    var node = document.createElement("LI");
    node.onclick = function(){
        selectedItem = items[this.id];
    }
    node.id = i;
    var textnode = document.createTextNode(items[i].name + " - - - price: " + items[i].price);
    node.appendChild(textnode);
    document.getElementById("forSale").appendChild(node);
}


function addToCart(){

    var node = document.createElement("LI");
    var textnode = document.createTextNode(selectedItem.name);
    node.appendChild(textnode);
    document.getElementById("cartList").appendChild(node);

    cost.push(selectedItem.price);

    totalCost = 0;

    cost.forEach(element => {
        totalCost += element;
    });

    document.getElementById("cost").innerHTML = totalCost;
}