// uppgift 4
const checkbox=document.getElementById("divStyle");
const textfields=document.getElementsByClassName("textfield");
const button =document.getElementById("tabortknapp");
const tomrutadiv=document.getElementById("tomruta"); 

// Uppgift 5
// Skapar en funktionsdeklaration 

function textcontrol (e) {
console.log(e.target.id)

    if (e.target.id === "content") { 
        tomrutadiv.innerHTML = e.target.value; 

    }

}

// Uppgift 6 
// Skapa eventlyssnare för checkbox, textfälten "innehåll" och "färg" och knappen "ta bort".

// EVentlyssnare för checkboxen 

checkbox.addEventListenereventlistener("change", function () {
    tomrutadiv.style.backgroundColor = textfields[0].value;

}); 


// EVentlyssnare för textfälten "innehåll" och "färg"
// Skapas genom en for loop som kör 2 varv. 
// För varje gång sidan laddas skapas en eventlyssnare för textfält 1 och textfält 2.

for (let i = 0; i < textfields.length; i++) {
    textfields[i].addEventListener("input", textcontrol);

}



// EVentlyssnare för "ta bort" knappen

button.addEventListener("click", function () {
    tomrutadiv.remove(); 

}); 
