


let homepoints = 0
let heroValue = document.getElementById("home-score-display")
let guestValue = document.getElementById("guest-score-display")

// console.log(heroValue)


function oneHomeAddition(){
    points = points + 1
    homepoints

    heroValue.textContent= points
}

// oneAddition()

function twoHomeAddition(){
     points = points + 2

    heroValue.textContent= points
}

function threeHomeAddition(){
    points = points + 3

    heroValue.textContent= points
}


function oneGuestAddition(){
    points = points + 1

    guestValue.textContent= points
}


function twoGuestAddition(){
     points = points + 2

    guestValue.textContent= points
}

function threeGuestAddition(){
    points = points + 3

    guestValue.textContent= points
}