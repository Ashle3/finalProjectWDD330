import largeDogs from "../json/largeDogs.json"  assert { type: 'JSON' };

let test = document.getElementById('largedogs');
let i = 0;



for(i in largeDogs){
    let div = document.createElement('div');
    div.setAttribute('class', 'dogBox');

    let namediv = document.createElement('div');
    namediv.setAttribute('class', 'nameDiv');

    let dogname = document.createElement('h2');
    dogname.setAttribute('class', 'dogName');
    dogname.innerHTML = largeDogs[i].name;

    let picture = document.createElement('img');
    picture.setAttribute('src', `${largeDogs[i].img}`);
    picture.setAttribute("alt", `Image of ${largeDogs[i].name}.`);
    picture.setAttribute('class', 'dogPic');

    let meet = document.createElement('a');
    meet.setAttribute('type', 'button');
    meet.setAttribute('name', 'meetDog');
    meet.setAttribute('id', 'meetDog');
    meet.setAttribute('title', `Meet ${largeDogs[i].name}!`);
    meet.innerHTML = `Meet ${largeDogs[i].name}`;
    meet.setAttribute('href', '../dog/index.html?id='+ largeDogs[i].id);


    namediv.append(dogname);
    namediv.append(meet);

    div.append(namediv);
    div.appendChild(picture);
    test.append(div);
}

// function createDogPage(i, array){
//     let pagediv = document.createElement('div');
//     pagediv.setAttribute('class', 'pageDiv');

//     let picture = document.createElement('img');
//     picture.setAttribute('src', `${array[i].img}`);
//     picture.setAttribute("alt", `Image of ${array[i].name}.`);
//     picture.setAttribute('class', 'dogPicLarge');

//     let infodiv = document.createElement('div');
//     infodiv.setAttribute('class', 'infodiv');

//     let dogname =  document.createElement('h1');
//     dogname.setAttribute('class', 'dogNameLarge');
//     dogname.innerHTML = array[i].name;
//     infodiv.append(dogname);

//     let ul = document.createElement('ul');

//     let listBreed = document.createElement('li');
//     listBreed.innerHTML = array[i].breed;
//     ul.append(listBreed);
//     let listGender = document.createElement('li');
//     listGender.innerHTML = array[i].gender;
//     ul.append(listGender);
//     let listAge = document.createElement('li');
//     listAge.innerHTML = array[i].age;
//     ul.append(listAge);
//     let listNotes = document.createElement('li');
//     listNotes.innerHTML = array[i].notes;
//     ul.append(listNotes);

//     infodiv.append(ul);

    
//     pagediv.append(infodiv);
//     pagediv.append(picture);

//     let wholePage = document.getElementById('info');
//     wholePage.innerHTML = pagediv;

//     let dogTitle = document.getElementById('dogTitle');
//     dogTitle.innerHTML = array[i].name;
// }
// var i;
// for(i=0, i<largeDogs.length; i++;){
//     // let test = document.getElementById('largedogs');
//     test.innerHTML = largeDogs[i].name;
// }

