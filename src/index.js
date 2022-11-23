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
const slide2 = createElementWithClass("div","slide");
const slide3 = createElementWithClass("div","slide");
const slide4 = createElementWithClass("div","slide");
// We need to repeat the slides for the effect desired
const slide5 = createElementWithClass("div","slide");
const slide6 = createElementWithClass("div","slide");
const slide7 = createElementWithClass("div","slide");
const slide8 = createElementWithClass("div","slide");

// Place elements all inside others
slide1.appendChild(img1);
slide2.appendChild(img2);
slide3.appendChild(img3);
slide4.appendChild(img4);
slide5.appendChild(img5);
slide6.appendChild(img6);
slide7.appendChild(img7);
slide8.appendChild(img8);

slider.appendChild(slide1);
slider.appendChild(slide2);
slider.appendChild(slide3);
slider.appendChild(slide4);
slider.appendChild(slide5);
slider.appendChild(slide6);
slider.appendChild(slide7);
slider.appendChild(slide8);

// Create control buttons
const nextButton = createElementWithId("div","next-button");
const previousButton = createElementWithId("div","previous-button");
const leftArrowIcon = new Image();
const rightArrowIcon = new Image();
leftArrowIcon.src = Previous;
rightArrowIcon.src = Next;
nextButton.appendChild(rightArrowIcon);
previousButton.appendChild(leftArrowIcon);

container.appendChild(slider);
container.appendChild(nextButton);
container.appendChild(previousButton);

document.body.appendChild(container);

// Translate the slides to the left
function toNextSlide() {
    const sliderDiv = document.getElementById("slider");
    sliderDiv.classList.add("lefted");
}

// Translate the slides to the right
function toPreviousSlide() {
    const sliderDiv = document.getElementById("slider");

}