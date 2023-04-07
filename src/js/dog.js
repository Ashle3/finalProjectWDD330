import largeDogs from "../json/largeDogs.json"  assert { type: 'JSON' };
//Step 1: get id from url
function getDogId(dogUrl){
    const queryString = window.location.search; //?id=1
    const urlParams = new URLSearchParams(queryString);//id=1
    const dog = urlParams.get(dogUrl);
    return dog;
}

let dog = getDogId('id');
let section1 = document.getElementById('testing');
let section = document.getElementById('doginfo');


//Step 2: find dog in large dogs with said id


// function createDogPage(dog){
    

//     let picture = document.createElement('img');
//     picture.setAttribute('src', `${dog.img}`);
//     picture.setAttribute("alt", `Image of ${dog.name}.`);
//     picture.setAttribute('class', 'dogPicLarge');

    // let infodiv = document.createElement('div');
    // infodiv.setAttribute('class', 'infodiv');

    // let dogname =  document.createElement('h1');
    // dogname.setAttribute('class', 'dogNameLarge');
    // dogname.innerHTML = array[i].name;
    // infodiv.append(dogname);

    // let ul = document.createElement('ul');

    // let listBreed = document.createElement('li');
    // listBreed.innerHTML = dog.breed;
    // ul.append(listBreed);
    // let listGender = document.createElement('li');
    // listGender.innerHTML = dog.gender;
    // ul.append(listGender);
    // let listAge = document.createElement('li');
    // listAge.innerHTML = dog.age;
    // ul.append(listAge);
    // let listNotes = document.createElement('li');
    // listNotes.innerHTML = dog.notes;
    // ul.append(listNotes);

    // infodiv.append(ul);

    
    // pagediv.append(infodiv);
    // pagediv.append(picture);

    // let wholePage = document.getElementById('info');
    // wholePage.innerHTML = pagediv;

    // let dogTitle = document.getElementById('dogTitle');
    // dogTitle.innerHTML = dog.name;

//     return picture;
// }


function createDogPage(dog){
    let div = document.createElement('div');
    div.setAttribute('class', 'dogPage');

    let picture = document.createElement('img');
    picture.setAttribute('src', `${largeDogs[dog].img}`);
    picture.setAttribute("alt", `Image of ${largeDogs[dog].name}.`);
    picture.setAttribute('class', 'dogPicLarge');
    div.append(picture);

    let words = document.createElement('div');
    words.setAttribute('class', 'words');

    let name = document.createElement('h1');
    name.setAttribute('class', 'individh1');
    name.innerHTML = largeDogs[dog].name;
    words.append(name);

    let list = document.createElement('ul');
    let breed = document.createElement('li');
    breed.innerHTML = `<span class='bold'>Breed: </span>${largeDogs[dog].breed}`;
    list.append(breed);
    let gender = document.createElement('li');
    gender.innerHTML = `<span class='bold'>Gender: </span>${largeDogs[dog].gender}`;
    list.append(gender);
    let age = document.createElement('li');
    age.innerHTML = `<span class='bold'>Age: </span>${largeDogs[dog].age}`;
    list.append(age);
    let notes = document.createElement('li');
    notes.innerHTML = `<span class='bold'>About ${largeDogs[dog].name}:</span> ${largeDogs[dog].notes}`;
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
    // like.append(number);

    let clickcounter = 0;
    favorite.addEventListener('click', function(){
    //     // dogList.push(largeDogs[dog].name);
    //     // localStorage.setItem('dog', largeDogs[dog].name);
        clickcounter +=1;
        number.innerHTML = `${largeDogs[dog].name} has ${clickcounter} likes.`;
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
        number.innerHTML = `${largeDogs[dog].name} has ${clickcounter} likes.`;
    });

    buttons.append(favorite);
    buttons.append(remove);

    like.append(buttons);
    like.append(number);

    // let application = document.createElement('a');
    // application.setAttribute('href', '../adopt/index.html');
    // application.innerHTML = `Adopt ${largeDogs[dog].name}`;
    // application.setAttribute('class', 'application');

    words.append(list);
    words.append(like);
    // words.append(application);
    div.append(words);
    let page = document.createElement('div');
    page.append(div);
    
    
    
    return page;
}

section.append(createDogPage(dog));

