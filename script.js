const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn")

const containerEl = document.getElementById("container")

let selectedRating = "";


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) => {
      removeActive();  
      selectedRating = event.target.innerText ||
      event.target.parentNode.innerText;
      event.target.classList.add("active")
      event.target.parentNode.classList.add("active")
    });
});

btnEl.addEventListener("click", () =>{
    if(selectedRating !== ""){
    containerEl.innerHTML = `
    <div class="rating-text">
    <strong>Kiitos palautteesta!</strong>
    <br>
    <br>
    <strong>Palaute: ${selectedRating}</strong>
    <p>Palautteesi on meille tärkeää, <br><br>jotta voimme parantaa ostokokemustasi.</p>
    </div>
    `
    }
})


function removeActive () {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}