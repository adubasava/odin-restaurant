import { createMenu } from './menu';
import { createContact } from './contact';
import { createHome } from './home';
import './style.css';

const contentDiv = document.getElementById("content");

createHome();

document.querySelector('.nav').addEventListener('click', event => {
    contentDiv.textContent = "";
    if (event.target.id === "menu") {        
        createMenu();
    } else if (event.target.id === "contact") {
        createContact();
    } else {
        createHome();
    }    
})