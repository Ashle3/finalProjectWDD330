//handles the favorite and unfavorites
import largeDogs from "../json/largeDogs.json"  assert { type: 'JSON' }
import {dogList} from "./favList.mjs";

function getDogId(dogUrl){
    const queryString = window.location.search; //?id=1
    const urlParams = new URLSearchParams(queryString);//id=1
    const dog = urlParams.get(dogUrl);
    return dog;
}

let dog = getDogId('id');

//Grab the elements from the page
let favorites = document.getElementById('favorites');
let message = document.getElementById('message');

function addToFavorites(array, dog){
    array.push(largeDogs[dog].name);
}

favorites.addEventListener('click', addToFavorites(dogList, dog));
localStorage.setItem('dogs', JSON.stringify(dog));