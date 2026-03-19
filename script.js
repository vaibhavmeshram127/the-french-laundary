


function book() {
    const date = document.getElementById("date").value;
    if (!date) {
        alert("Select a date!");
        return;
    }
    document.getElementById("msg").style.display = "block";
}

document.querySelectorAll(".book-btn").forEach(button => {
    button.addEventListener("click", function() {
       
        const card = this.closest(".card");
        
       
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector(".price").innerText;
        

        alert(`You selected: ${title}\nPrice: ${price}\n\nProceed to booking panel on the right.`);
        
        
        document.querySelector(".booking-box h3").innerText = title;
    });
});

