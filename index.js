// === State ===
const state = {
  start: ["sheep"],
  target: [],
};

/** Moves a sheep from start to target */
function moveSheep() {
  // TODO
  const sheep = state.start.pop();
  state.target.push(sheep);
}

// === Render ===

/** Renders sheep on the starting bank */
function renderStartSheep() {
  const startingSheep = state.start.map((sheep) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = "🐑";
    li.append(button);

    // TODO: Add event listener so the sheep moves when clicked
    button.addEventListener("click", () => {
      moveSheep();
      render();
    });

    return li;
  });

  const startingBank = document.querySelector("#startingBank ul");
  startingBank.replaceChildren(...startingSheep);
}

/** Renders sheep on the target bank */
function renderTargetSheep() {
  // TODO
  const targetSheep = state.target.map((sheep) => {
    const li = document.createElement("li");
    li.textContent = "🐑";
    return li;
  });
  const targetBank = document.querySelector("#targetBank ul");
  targetBank.replaceChildren(...targetSheep);
}

function render() {
  renderStartSheep();
  renderTargetSheep();
}

// === Script ===
// Initial render
render();

// TODO: Add sheep to the starting bank when the form is submitted
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const numberInput = document.querySelector("#numSheep");
  for (let i = 0; i < numberInput.value; i++) {
    state.start.push("sheep");
  }

  render();
});
