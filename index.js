let myDate = new Date()
let myDateFormate = `Today: ${myDate.getDate()}/${myDate.getMonth()+1}/${myDate.getFullYear()}`

// show date on the button it self
window.onload = function (){
    document.getElementById("date").textContent = myDateFormate
}

// to show the result in consol just click it
document.getElementById("date").addEventListener("click", function(){
    console.log(myDateFormate)
})
