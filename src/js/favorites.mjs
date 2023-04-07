//handles the favorite and unfavorites
import largeDogs from "../json/largeDogs.json"  assert { type: 'JSON' };
// import {dogList} from "./favList.mjs";

function getDogId(dogUrl){
    const queryString = window.location.search; //?id=1
    const urlParams = new URLSearchParams(queryString);//id=1
    const dog = urlParams.get(dogUrl);
    return dog;
}
let dog = getDogId('id');

// //Grab the elements from the page
export const dogList = [];

let favorites = document.getElementById('favorites');

// localStorage.setItem('dog', JSON.stringify(dogList));

// favorites.addEventListener('click', function(){

//     // dogList.push(largeDogs[dog].name);
//     // localStorage.setItem('dog', JSON.stringify(dogList));
//     // let old_data = localStorage.getItem('dog');
//     // if(old_data == null){
//     //     old_data = [];
//     // }
//     // let new_data = largeDogs[dog].name;
//     // localStorage.setItem('new', JSON.stringify(new_data));
//     // old_data.push(new_data);
//     // localStorage.setItem('dog', JSON.stringify(old_data));
// });

// console.log(dogList.length);
// function addToCart{

// }
// let message = document.getElementById('message');

// function addToFavorites(array, list, dog){
//     // let old_data = JSON.parse(localStorage.getItem('dog'));
//     let new_data = array.push(list[dog].name);
//     localStorage.setItem('dog', JSON.stringify(new_data));
// }

// // function addMore(array, list, dog){
// //     let old_data = JSON.parse(array.getItem('dog'));
// //     let new_data = old_data.push(list[dog].name);
// //     localStorage.setItem('dog', JSON.stringify(new_data));
// // }

// if(dogList.length = 0){
//     favorites.addEventListener('click', addToFavorites(dogList, largeDogs, dog));
// }
// // } else{
// //     favorites.addEventListener('click', addMore(dogList, largeDogs, dog));
// // }

