function toggleReviews(index) { 
    var reviews = document.getElementsByClassName("reviews")[index]; 
    var button = document.getElementsByClassName("toggleButton")[index];

    if (reviews.style.display === "none") {
        reviews.style.display = "block";
        button.innerText = "Скрыть отзывы";
    } else {
        reviews.style.display = "none";
        button.innerText = "Показать отзывы";
    }
}

function deleteReview(index) {
    var reviews = JSON.parse(localStorage.getItem("reviews"));
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    location.reload();
}