const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = document.getElementById('ingredients');
const newArr = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  newArr.push(item);
})
listItems.append(...newArr);
