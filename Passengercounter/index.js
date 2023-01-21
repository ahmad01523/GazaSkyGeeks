


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)

let count = 0

function countinc () {

    count += 1
    countEl.textContent = count
    // console.log(count)
}


function save() {

    let pre = count + " - "

    saveEl.textContent += " " + pre

    console.log(count)


    count = 0  
    countEl.textContent = 0 
}


