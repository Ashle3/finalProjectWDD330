import smallDogs from "../json/smallDogs.json"  assert { type: 'JSON' };

function getDogId(dogUrl){
    const queryString = window.location.search; //?id=1
    const urlParams = new URLSearchParams(queryString);//id=1
    const dog = urlParams.get(dogUrl);
    return dog;
}

let dog = getDogId('id');
let section = document.getElementById('smalldoginfo');

function createDogPage(dog){
    let div = document.createElement('div');
    div.setAttribute('class', 'dogPage');

    let picture = document.createElement('img');
    picture.setAttribute('src', `${smallDogs[dog].img}`);
    picture.setAttribute("alt", `Image of ${smallDogs[dog].name}.`);
    picture.setAttribute('class', 'dogPicLarge');
    div.append(picture);

    let words = document.createElement('div');
    words.setAttribute('class', 'words');

    let name = document.createElement('h1');
    name.setAttribute('class', 'individh1');
    name.innerHTML = smallDogs[dog].name;
    words.append(name);

    let list = document.createElement('ul');
    let breed = document.createElement('li');
    breed.innerHTML = `<span class='bold'>Breed: </span>${smallDogs[dog].breed}`;
    list.append(breed);
    let gender = document.createElement('li');
    gender.innerHTML = `<span class='bold'>Gender: </span>${smallDogs[dog].gender}`;
    list.append(gender);
    let age = document.createElement('li');
    age.innerHTML = `<span class='bold'>Age: </span>${smallDogs[dog].age}`;
    list.append(age);
    let notes = document.createElement('li');
    notes.innerHTML = `<span class='bold'>About ${smallDogs[dog].name}:</span> ${smallDogs[dog].notes}`;
    list.append(notes);

    let like = document.createElement('div');
    like.setAttribute('class', 'like');

    let favorite = document.createElement('input');
    favorite.setAttribute('type', 'button');
    favorite.setAttribute('name', 'favorites');
    favorite.setAttribute('id', `favorites`);
    favorite.setAttribute('value', 'Like');
    favorite.setAttribute('title', 'Add to favorites.');

    let number = document.getElementById('message');

    let clickcounter = 0;
    favorite.addEventListener('click', function(){
        clickcounter +=1;
        number.innerHTML = `${smallDogs[dog].name} has ${clickcounter} likes.`;
    });

    let buttons = document.createElement('div');

    let remove = document.createElement('input');
    remove.setAttribute('type', 'button');
    remove.setAttribute('name', 'remove');
    remove.setAttribute('id', `favorites`);
    remove.setAttribute('value', 'Remove Like');
    remove.setAttribute('title', 'Remove Like.');

    remove.addEventListener('click', function(){
        clickcounter -=1;
        number.innerHTML = `${smallDogs[dog].name} has ${clickcounter} likes.`;
    });

    buttons.append(favorite);
    buttons.append(remove);

    like.append(buttons);
    like.append(number);

    // let application = document.createElement('a');
    // application.setAttribute('href', '../adopt/index.html');
    // application.innerHTML = `Adopt ${smallDogs[dog].name}`;
    // application.setAttribute('class', 'application');

    words.append(list);
    words.append(like);
    div.append(words);

    let page = document.createElement('div');
    page.append(div);
    
    
    
    return page;
}

section.append(createDogPage(dog));