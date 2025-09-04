let myTripSlide = 0;
let boardSlide = 0;
const boardSlides = Array.from(document.getElementById('board-slides').children);
const myTripSlides = Array.from(document.getElementById('myTrip-slides').children);
const myTripPoints = document.querySelectorAll('.myTrip-point');
const boardPoints = document.querySelectorAll('.board-point');
let interval = setInterval(nextSlide, 3000);


function showSlide(i, project) {
    if (project === 'myTrip') {
        myTripSlides.forEach((slide, index) => {
            slide.classList.toggle('active', i === index);
            myTripPoints[index].classList.toggle('active', i === index);
        });
    }
    if (project === 'board') {
        boardSlides.forEach((slide, index) => {
            slide.classList.toggle('active', i === index);
            boardPoints[index].classList.toggle('active', i === index);
        });
    }
}

function nextSlide() {
    myTripSlide = (myTripSlide + 1) % myTripSlides.length;
    boardSlide = (boardSlide + 1) % boardSlides.length;
    showSlide(myTripSlide, 'myTrip');
    showSlide(boardSlide, 'board');
}


window.changeMyTripSlide = function (index) {
    myTripSlide = index;
    showSlide(myTripSlide, 'myTrip');
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
}

window.changeBoardSlide = function (index) {
    boardSlide = index;
    showSlide(boardSlide, 'board');
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
}
