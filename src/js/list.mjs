
let list = document.getElementById('cart');

// export const dogList = [];

// let stuff = localStorage.setItem('dog', JSON.stringify())

let data = JSON.parse(localStorage.getItem('dog'));

list.append(data);