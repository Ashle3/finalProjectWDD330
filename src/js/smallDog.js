import smallDogs from "../json/smallDogs.json"  assert { type: 'JSON' };

let test = document.getElementById('smalldogs');
let i = 0;

for(i in smallDogs){
    let div = document.createElement('div');
    div.setAttribute('class', 'dogBox');

    let namediv = document.createElement('div');
    namediv.setAttribute('class', 'nameDiv');

    let dogname = document.createElement('h2');
    dogname.setAttribute('class', 'dogName');
    dogname.innerHTML = smallDogs[i].name;

    let picture = document.createElement('img');
    picture.setAttribute('src', `${smallDogs[i].img}`);
    picture.setAttribute("alt", `Image of ${smallDogs[i].name}.`);
    picture.setAttribute('class', 'dogPic');

    let meet = document.createElement('a');
    meet.setAttribute('type', 'button');
    meet.setAttribute('name', 'meetDog');
    meet.setAttribute('id', 'meetDog');
    meet.setAttribute('title', `Meet ${smallDogs[i].name}!`);
    meet.innerHTML = `Meet ${smallDogs[i].name}`;
    meet.setAttribute('href', '../dog1/index.html?id='+ smallDogs[i].id);


    namediv.append(dogname);
    namediv.append(meet);

    div.append(namediv);
    div.appendChild(picture);
    test.append(div);
}