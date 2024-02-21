// constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const myStudentId = document.getElementById("myStudentId");

// function to change bg color from user input and add student id
function changeCustomColor() {
    const inputValue = parseInt(customNumberInput.value);
    myStudentId.textContent = "200530617"; // Replacing Student ID
    if (inputValue < 0 || inputValue > 100) {
        document.body.style.backgroundColor = "red";
    } else if (inputValue >= 0 && inputValue <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (inputValue > 20 && inputValue <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (inputValue > 40 && inputValue <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (inputValue > 60 && inputValue <= 80) {
        document.body.style.backgroundColor = "purple";
    } else if (inputValue > 80 && inputValue <= 100) {
        document.body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;//making the random number so that its range is from 1-100
    customNumberInput.value = randomValue; // this is adding random value to the input element 
    changeCustomColor();
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imgArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
 
    for (let i = 0; i < imgArray.length; i++) {
        // Create a new option element
        const option = document.createElement('option');
        // Set the text content of the option to the current image name
        option.textContent = imgArray[i];
        // Append the option to the select element
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// event listeners for on click event of buttons and select
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);


// event listeners for on change event of select
imageSelect.addEventListener('change', changeImage);

// Function call to generate options for the image select list
addList();