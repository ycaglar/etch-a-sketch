let container = document.querySelector('.container');

form_grid(16);

function form_grid(grid_size) {
  grid_size = Math.min(grid_size, 100);
  for (let i = 0; i < grid_size ** 2; ++i) {
    let square = document.createElement('div');
    square.style.flex = `0 0 calc(960px / ${grid_size})`;
    square.style.height = `calc(960 / ${grid_size})px`
    square.addEventListener('mouseover', function (event) {
      square.style.backgroundColor = 'pink';
    });
    square.classList.add('square');
    container.appendChild(square);
  };
};

function remove_grid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  };
};

let reset_button = document.querySelector('button');

reset_button.addEventListener('click', function (event) {
  let grid_size = prompt('Enter grid size:');
  remove_grid();
  form_grid(grid_size);
});