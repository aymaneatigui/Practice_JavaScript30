const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
console.log(items);

const addItem = (e) => {
  e.preventDefault();
  const text = e.target.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  listItems(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  e.target.reset();
};

const listItems = (list = [], itemsList) => {
  itemsList.innerHTML = list
    .map((plate, i) => {
      return `
          <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${
        plate.done ? "checked" : ""
      }>
            <label for="item${i}">${plate.text}</label>
          </li>
        `;
    })
    .join("");
};

const toggleDone = (e) => {
  if (!e.target.matches("input")) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done
  localStorage.setItem("items", JSON.stringify(items));
  listItems(items, itemsList);

};

listItems(items, itemsList);

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
