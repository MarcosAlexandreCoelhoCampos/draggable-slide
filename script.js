const container = document.querySelector("[data-slide-container]");
const cards = document.querySelector("[data-slide-cards]");
const cardsElements = Array.from(cards.children);

let isPressedDown = false;
let cursorXSpace;

const container_rect = () => container.getBoundingClientRect();
const cards_rect = () => cards.getBoundingClientRect();

container.addEventListener("mousedown", (e) => {
  isPressedDown = true;
  cursorXSpace = e.offsetX - cards.offsetLeft;
  container.style.cursor = "grabbing";
});

container.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  cards.style.left = `${e.offsetX - cursorXSpace}px`;
  boundCards();
});

window.addEventListener("mouseup", () => {
  isPressedDown = false;
  container.style.cursor = "grab";
});

function boundCards() {
  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect().right < container_rect().right) {
    cards.style.left = `-${cards_rect().width - container_rect().width}px`;
  }
}
