
var plaindog = {name:"Plain Dog", price: 1.00};
var chilidog = {name:"Chili Dog", price: 1.75};
var deluxechilidog = {name:"Deluxe Chili Dog", price: 2.25};
var footlong = {name:"Foot Long Chili Dog", price: 3.25};
var footlongdeluxe = {name:"Foot Long Deluxe Chili Dog", price: 3.75};
var yardlong = {name:"Yard Long Chili Dog", price: 4.25};
var yardlongdeluxe = {name:"Yard Long Deluxe Chili Dog", price: 4.75};
var turbodog = {name:"Turbo Chili Dog", price: 5.00};
var superdog = {name:"Super Chili Dog", price: 7.00};
var hyperdog = {name:"Hyper Chili Dog", price: 10.00};

var items = [plaindog, chilidog, deluxechilidog, footlong, footlongdeluxe, yardlong, yardlongdeluxe, turbodog, superdog, hyperdog];
var cost =[];
var purchasing = [];

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
    node.className = "product";
    var textnode = document.createTextNode(items[i].name + " - - - price: $" + items[i].price);
    node.appendChild(textnode);
    document.getElementById("forSale").appendChild(node);
}


function addToCart(){

    var node = document.createElement("LI");
    var textnode = document.createTextNode(selectedItem.name);
    node.appendChild(textnode);
    document.getElementById("cartList").appendChild(node);

    cost.push(selectedItem.price);
    purchasing.push(selectedItem);

    totalCost = 0;

    cost.forEach(element => {
        totalCost += element;
    });

    document.getElementById("total").innerHTML = totalCost.toFixed(2);
}

var btnContainer = document.getElementById("forSale");

var btns = btnContainer.getElementsByClassName("product");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("product-active");

    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" product-active", "");
    }

    this.className += " product-active";
  });
}

var receipt;

function checkOut(){

    receipt = "Here is your receipt...\n";

    purchasing.forEach(element => {
        receipt += element.name + " - - " + element.price.toFixed(2) + "\n";
    });

    receipt = receipt.replace(/\n/g, "\r\n");
    download("receipt",  receipt + "\nTotal: " + totalCost.toFixed(2));

    totalCost = 0.00
    document.getElementById("total").innerHTML = 0.00.toFixed(2);
    cost =[];
    purchasing = [];

    while( document.getElementById("cartList").firstChild ){
        document.getElementById("cartList").removeChild( document.getElementById("cartList").firstChild );
    }

}

function transperent(button){
    if(button == 1){
        document.getElementById("fader1").classList.add("transperent");
    }
    else{
        document.getElementById("fader2").classList.add("transperent");
    }
}

function solid(button){
    if(button == 1){
        document.getElementById("fader1").classList.remove("transperent");
    }
    else{
        document.getElementById("fader2").classList.remove("transperent");
    }
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }