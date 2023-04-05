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

    let meet = document.createElement('button');
    meet.setAttribute('name', 'meetDog');
    meet.setAttribute('id', 'meetDog');
    meet.setAttribute('title', `Meet ${largeDogs[i].name}!`);
    meet.innerHTML = `Meet ${largeDogs[i].name}`;

    namediv.append(dogname);
    namediv.append(meet);

    div.append(namediv);
    div.appendChild(picture);
    test.append(div);
}

// var i;
// for(i=0, i<largeDogs.length; i++;){
//     // let test = document.getElementById('largedogs');
//     test.innerHTML = largeDogs[i].name;
// }

