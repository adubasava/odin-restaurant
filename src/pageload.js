function addDiv(content, className, target) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(className);
    const newContent = document.createTextNode(content);
    newDiv.appendChild(newContent);    
    target.appendChild(newDiv);
}

function addHeader(content, level, target) {
    const newHeading = document.createElement(level);
    const headingContent = document.createTextNode(content);
    newHeading.appendChild(headingContent);
    target.appendChild(newHeading);
}

function addImage(source, width, target) {
    const newImg = new Image();
    newImg.src = source;
    newImg.width = width;
    target.appendChild(newImg);
}

export { addDiv, addHeader, addImage };