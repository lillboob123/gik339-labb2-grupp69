// uppgift 4
const checkbox=document.getElementById("divStyle");
const textfields=document.getElementsByClassName("textfield");
const button =document.getElementById("tabortknapp");
const tomrutadiv=document.getElementById("tomruta"); 

// Uppgift 5

function eventlyssnare(e) {
console.log(e.target.id)

    if (e.target.id === "content") { 
        tomrutadiv.innerHTML = e.target.value; 

    }

}

