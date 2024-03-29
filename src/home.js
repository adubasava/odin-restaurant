﻿import { addDiv, addHeader, addImage } from './pageload';
import Picture from './pexels-life-of-pix-67468.jpg';

const contentDiv = document.getElementById("content");

function createHome() {
    addHeader("Welcome to ABC Restaurant!", "h1", contentDiv);
    addImage(Picture, 500, contentDiv);
    addDiv("ABC Restaurant presents a modern dining experience with locally sourced ingredients and home cooked recipes. The perfect choice for intimate dinner, catchup with friends or a special occasion.", "main", contentDiv);
}

export { createHome };