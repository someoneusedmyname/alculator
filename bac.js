// Checks alcohol costs to your budget
function howMany() {
    var x, y, text, text2;
    let cos = document.getElementById('alcohol').value; // gets object from array
    let cost = alcoholType[cos].price; // gets price property from object in array
    y = document.getElementById("quantity").value; // Get the value of the input field with id="quantity"
    x = document.getElementById("money").value;
    if (isNaN(y) || y < 1 || (y * cost) > x) { // If y is Not a Number, or you don't have enough cash ('x')
        text = "You don't have enough cash.";
        document.getElementById("message2").innerHTML = ""; // clears old message if required
        document.getElementById("message1").innerHTML = text; // to style with red text
    } else {
        text2 = "Drink responsibly!";
        document.getElementById("message1").innerHTML = ""; // clears old message if required
        document.getElementById("message2").innerHTML = text2; // to style with green text
    }
}

// end of function

// Alcohol objects

var beer1 = {
    content: 60,
    price: 1.50
}; // content value = 1 * 12oz * 5(%)
var cheapBeer = {
    content: 360,
    price: 7
}; // content value = 6 * 12oz * 5(%)
var averageBeer = {
    content: 360,
    price: 10
};
var premiumBeer = {
    content: 360,
    price: 13
};
var craftBeer = {
    content: 416,
    price: 18
}; // content value = 4 * 16oz * 6.5(%)
var wine1 = {
    content: 101,
    price: 4.00
}; // content value = 8.4oz * 12(%)
var cheapWine = {
    content: 305,
    price: 8
}; // content value = 25.4oz * 12(%)
var averageWine = {
    content: 305,
    price: 12
};
var premiumWine = {
    content: 305,
    price: 20
};
var shot1 = {
    content: 68,
    price: 3.30
}; // content value = 1.7oz * 40(%)
var cheapVodka = {
    content: 508,
    price: 11.5
}; // content value = 12.7oz * 40(%)
var averageVodka = {
    content: 508,
    price: 13.5
};
var premiumVodka = {
    content: 508,
    price: 27
};
var cheapRye = {
    content: 508,
    price: 11.5
};
var averageRye = {
    content: 508,
    price: 13.5
};
var premiumRye = {
    content: 508,
    price: 18
};
var cheapCooler = {
    content: 473,
    price: 9
};
var cheapCider = {
    content: 504,
    price: 10
};

// Alcohol array

var alcoholType = [beer1, cheapBeer, averageBeer, premiumBeer, craftBeer, wine1, cheapWine, averageWine, premiumWine, shot1, cheapVodka, averageVodka, premiumVodka, cheapRye, averageRye, premiumRye, cheapCooler, cheapCider];

// Alculator

function bacM() { // Calculates Blood Alcohol Content
    let i = document.getElementById('alcohol').value; // grabs the alcohol object from the array
    let percent = alcoholType[i].content; // grabs the alcohol object from the array
    var quant = document.getElementById('quantity').value;
    var rate = document.getElementById('metabolism').value;
    var massLbs = document.getElementById('mass').value;
    var timeHours = document.getElementById('hours').value;
    var messageBac = ((rate * percent * quant) / massLbs) - (timeHours * 0.015);
    console.log(messageBac);
    if (isNaN(messageBac)) { // Alerts if a field is missing numerical value
        alert('Please check fields');
    }
    if (messageBac < 0) { // BAC is zero after enough time
        alert("Your B.A.C. would be 0.");

    } else {
        alert("Your B.A.C. would be " + messageBac.toFixed(3) + ". If you don't trust the calculations, just blow into your phone for 5 seconds.");
    }
}

// end of function
    
    