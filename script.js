const search = document.querySelector('.search')
const searchFrom = document.querySelector('.search-from')
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

search.addEventListener("click", () =>{
    searchFrom.classList.add('active');
    cartContainer.classList.remove('active');
    navbar.classList.remove('active');
})

menu.addEventListener("click", () =>{
    navbar.classList.add('active');
    searchFrom.classList.remove('active');
    cartContainer.classList.remove('active');
})

const cart = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container')

cart.addEventListener("click", () =>{
    cartContainer.classList.add('active');
    searchFrom.classList.remove('active');
    navbar.classList.remove('active');
})

menu.addEventListener('click', function() {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
});

search.addEventListener('click', function() {
    if (searchFrom.style.display === "none") {
        searchFrom.style.display = "block";
    } else {
        searchFrom.style.display = "none";
    }
});

cart.addEventListener('click', function() {
    if (cartContainer.style.display === "none") {
        cartContainer.style.display = "block";
    } else {
        cartContainer.style.display = "none";
    }
});