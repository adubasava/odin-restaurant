import { addHeader } from './pageload';

const contentDiv = document.getElementById("content");

function createContact() {
    addHeader("Contact us", "h1", contentDiv);
    const mapDiv = document.createElement("div");
    mapDiv.innerHTML = "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8849.809675359138!2d-0.13548925134206063!3d51.505990810947786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce37bbdb95%3A0x5120415568fd2d8b!2z0KHQtdC90YLRgNCw0Lsg0JvQvtC90LTQvtC9LCDQm9C-0L3QtNC-0L0gU1cxQSAyRFIsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sby!4v1710595027115!5m2!1sru!2sby' width='600' height='450' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>";
    contentDiv.appendChild(mapDiv);   
}

export { createContact };