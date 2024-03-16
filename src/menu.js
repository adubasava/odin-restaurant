import { addDiv, addHeader, addImage } from './pageload';

const contentDiv = document.getElementById("content");

function createMenu() {
    addHeader("Our menu", "h1", contentDiv);
    addDiv("", "container", contentDiv);    
    const cardDiv = document.querySelector('.container');

    const card1 = document.createElement("div");
    card1.id = "card1";
    cardDiv.appendChild(card1);
    let itemDiv = document.getElementById(card1.id);
    addHeader("Potato Salad", "h3", itemDiv);
    addImage("../src/pexels-vinit-jain-16171917.jpg", 250, itemDiv);
    addDiv("Potatos with parsley and olive oil.", "menu", itemDiv);
    addDiv("$ 5", "price", itemDiv);  
    
    const card2 = document.createElement("div");
    card2.id = "card2";
    cardDiv.appendChild(card2);
    itemDiv = document.getElementById(card2.id);
    addHeader("Scallops", "h3", itemDiv);
    addImage("../src/pexels-angele-j-128388.jpg", 250, itemDiv);
    addDiv("Cooked in white wine, garlic and cream.", "menu", itemDiv);   
    addDiv("$ 9", "price", itemDiv);  
    
    const card3 = document.createElement("div");
    card3.id = "card3";
    cardDiv.appendChild(card3);
    itemDiv = document.getElementById(card3.id);
    addHeader("Calamari Rings", "h3", itemDiv);
    addImage("../src/pexels-nikita-krasnov-6036950.jpg", 250, itemDiv);
    addDiv("Squid deep fried.", "menu", itemDiv);   
    addDiv("$ 8", "price", itemDiv);      
}

export { createMenu };