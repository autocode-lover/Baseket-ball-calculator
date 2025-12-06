


let homepoints = 0
let guestpoints=0
let heroValue = document.getElementById("home-score-display")
let guestValue = document.getElementById("guest-score-display")

// console.log(heroValue)


function oneHomeAddition(){
    homepoints +=1
    heroValue.textContent= homepoints
}

// oneAddition()

function twoHomeAddition(){
     homepoints +=2
    heroValue.textContent= homepoints
}

function threeHomeAddition(){
    homepoints +=3
    heroValue.textContent= homepoints
}


function oneGuestAddition(){
    guestpoints +=1
    guestValue.textContent= guestpoints
}


function twoGuestAddition(){
     guestpoints +=2
    guestValue.textContent= guestpoints
}

function threeGuestAddition(){
      guestpoints +=3
    guestValue.textContent= guestpoints
}