let card 

let container = document.querySelector(".container1")

console.log(container);

let list = ["./public/img/card/spider1.jpg", "./public/img/card/spider2.jpg", "./public/img/card/spider3.jpg", "./public/img/card/spider4.jpg"]


let newlist

function shuffleList(array) {
    newlist = array.concat(array)
    for (let i = newlist.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [newlist[i], newlist[j]] = [newlist[j], newlist[i]];
  }
}

// Mélanger la liste
shuffleList(list);

// Afficher la liste mélangée

// let newlist= []

newlist.forEach((element, i) => {
    card = document.createElement("img")
    container.appendChild(card)
    // card.src = element
    card.id = i.toString()
}
);

function none() {
    document.querySelectorAll("img").forEach(element => {
        element.src = "./public/img/card/couverture.jpg"
    });
}

none()


let recup = document.querySelectorAll("img")

console.log(recup);

let controle = []
let comp = 0
document.querySelectorAll("img").forEach(element => {
    element.addEventListener("click", () => {
        
        if (element.src.includes("couverture") && controle.length < 3) {
            element.src = newlist[parseInt(element.id)]
            controle.push(element)
            console.log(controle);
            if (controle.length == 2) {
                setTimeout(() => {
                    if (controle[0].src != controle[1].src) {
                        controle[0].src = "./public/img/card/couverture.jpg"
                        controle[1].src = "./public/img/card/couverture.jpg"
                    } else {
                        controle[0].className = "done"
                        controle[1].className = "done"
                        document.querySelectorAll("img").forEach(element => {
                            if (element.classList.contains("done")) {
                                comp++
                                element.classList.remove("done")
                            } 
                        });
                        if (comp == 8) {
                            //! mettre un msg de fin 
                            let btnend = document.createElement("button")
                            btnend.innerText = "RESTART"
                            document.body.appendChild(btnend)
                            btnend.addEventListener("click", () => {
                                location.reload()
                            })
                        }
                    }
                    controle = []
                }, 300);
                
            }
        } 
         
     })
});

    