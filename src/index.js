import "./style.css";
import Books from "./books.jpg";
import Tiles from "./andrew-ridley.jpg";
import Purple from "./jr-korpa.jpg";
import Wall from "./patrick-tomasso.jpg";

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
  
  img1.src = Books;
  img2.src = Tiles;
  img3.src = Purple;
  img4.src = Wall;

  const slide1 = createElementWithClass("div","slide");
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

  container.appendChild(slider);

  document.body.appendChild(container);