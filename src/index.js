import "./style.css";
import Books from "./books.jpg";
import Tiles from "./andrew-ridley.jpg";
import Purple from "./jr-korpa.jpg";
import Wall from "./patrick-tomasso.jpg";
import Next from "./arrow-next-icon.png";
import Previous from "./arrow-previous-icon.png";

// Create an element with an optional CSS id
function createElementWithId(tag, id) {
    const element = document.createElement(tag);
    if (id) {
      element.setAttribute("id", id);
    }
  
    return element;
}
  
// Create an element with an optional CSS class
function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }

    return element;
}
  
// Create an HTML skeleton
const container = createElementWithId("div", "container");
const slider = createElementWithId("div", "slider");

// Create the images inside divs
const img1 = new Image();
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();
// We need to repeat the images for the effect desired
const img5 = new Image();
const img6 = new Image();
const img7 = new Image();
const img8 = new Image();

img1.src = Books;
img2.src = Tiles;
img3.src = Purple;
img4.src = Wall;
// We need to repeat the images for the effect desired
img5.src = Books;
img6.src = Tiles;
img7.src = Purple;
img8.src = Wall;

const slide1 = createElementWithClass("div","slide");
slide1.classList.add("active");
const slide2 = createElementWithClass("div","slide");
const slide3 = createElementWithClass("div","slide");
const slide4 = createElementWithClass("div","slide");

// Place elements all inside others
slide1.appendChild(img1);
slide2.appendChild(img2);
slide3.appendChild(img3);
slide4.appendChild(img4);

slider.appendChild(slide1);
slider.appendChild(slide2);
slider.appendChild(slide3);
slider.appendChild(slide4);

// Create control buttons
const divControls = createElementWithId("div","controls");
const previousButton = createElementWithId("div","previous-button");
const nextButton = createElementWithId("div","next-button");
const leftArrowIcon = new Image();
const rightArrowIcon = new Image();
leftArrowIcon.src = Previous;
rightArrowIcon.src = Next;
previousButton.appendChild(leftArrowIcon);
nextButton.appendChild(rightArrowIcon);
divControls.appendChild(previousButton);
divControls.appendChild(nextButton);

// Create indicator circles
const indicatorCircles = createElementWithId("div","circles");

container.appendChild(slider);
container.appendChild(divControls);
container.appendChild(indicatorCircles);

document.body.appendChild(container);

// Variable that saves slide position
let index = 0;

// This function update the index value
function updateIndex(newValue) {
    index = newValue;
}

// Save the slides in an array
const slides = document.getElementById("slider").children;

// Change active slide
function changeSlide() {
    // First we need to remove class 'active' from all the slides
    for (let i = 0; i < slides.length; i+=1) {
        const element = slides[i];
        element.classList.remove("active");
    }
    // Now we add the class to the active one
    slides[index].classList.add("active");
}

// Move the index forward
function toNextSlide() {
    if (index === slides.length - 1) {
        updateIndex(0);
    } else {
        updateIndex(index+=1);
    }
    changeSlide();
}

// Move the index backward
function toPreviousSlide() {
    if (index === 0) {
        updateIndex(slides.length - 1);
    } else {
        updateIndex(index-=1);
    }
    changeSlide();
}

// Adding Event Listeners to Next and Previous buttons
rightArrowIcon.addEventListener("click", ()=> {toNextSlide()});
leftArrowIcon.addEventListener("click", ()=> {toPreviousSlide()});

// Create circles for each slides array element
function createCircles() {
    for (let i = 0; i < slides.length; i+=1) {
        const element = createElementWithClass("div","circle");
        element.innerHTML = i + 1;
        // Here we add functionality to each button
        element.addEventListener("click", ()=> {
            updateIndex(i);
            changeSlide();
        });

        indicatorCircles.appendChild(element);
    }
}

// Call above function
createCircles();