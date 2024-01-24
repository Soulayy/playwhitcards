// let img = {
//     src : ./../
// }
let card 
let container = document.querySelector(".container1")
console.log(container);


let spider1 = {
    id : "1",
    src : "./public/img/card/spider1.jpg",
}
let spider2 = {
    id : "2",
    src : "./public/img/card/spider2.jpg"
}
let spider3 = {
    id : "3",
    src : "./public/img/card/spider3.jpg"
}
let spider4 = {
    id : "4",
    src : "./public/img/card/spider4.jpg"
}
let spider11 = {
    id : "1",
    src : "./public/img/card/spider1.jpg",
}
let spider22 = {
    id : "2",
    src : "./public/img/card/spider2.jpg"
}
let spider33 = {
    id : "3",
    src : "./public/img/card/spider3.jpg"
}
let spider44 = {
    id : "4",
    src : "./public/img/card/spider4.jpg"
    
}

// let list = [spider1.src, spider2.src, spider3.src, spider4.src, spider11.src, spider22.src, spider33.src, spider44.src,]
let list = [spider1, spider2, spider3, spider4, spider11, spider22, spider33, spider44];

// Fonction pour mélanger la liste
function shuffleList(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Mélanger la liste
shuffleList(list);

// Afficher la liste mélangée

// let newlist= []

list.forEach(element => {

    // newlist.push(element)
    for (let i = 0; i < 1; i++) {
    card = document.createElement("img")
    card.setAttribute("class", "card")
    card.setAttribute("id", "")
    card.id = element.id
    container.appendChild(card)
    

}
});

let recup = document.querySelectorAll("img")

console.log(recup);

let controle = []

recup.forEach(element => {
    element.addEventListener("click", () => {
        controle.push(element)
        if (controle.length == 2) {
            element.src = element.src

            if (controle[0].id == controle[1].id) {
                alert("BJ")
                controle.pop()
                controle.pop()
            } else {
                controle[0].id = ""
                controle[1].id = ""
                controle.pop()
                controle.pop()
            }
        } 
         
     })
});

    