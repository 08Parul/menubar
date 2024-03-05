//make it responsive 
//add js in it //make full webpages 
//use backend //add product dynamically
// make a page which take product details and add it in backend

// products.js

const heroProducts = [
    { img_src: "bcg-img.jpg", img_name: "Popular Product 1", img_price: "$19.99" },
    { img_src: "bcg-img.jpg", img_name: "Popular Product 2", img_price: "$29.99" },
    // Add more popular products as needed
];

const recommendedProducts = [
    { img_src: "bcg-img.jpg", img_name: "Recommended Product 1", img_price: "$14.99" },
    { img_src: "bcg-img.jpg", img_name: "Recommended Product 2", img_price: "$24.99" },
    // Add more recommended products as needed
];

const inShopProducts = [
    { img_src: "bcg-img.jpg", img_name: "In Shop Product 1", img_price: "$9.99" },
    { img_src: "bcg-img.jpg", img_name: "In Shop Product 2", img_price: "$19.99" },
    // Add more in-shop products as needed
];

//import { heroProducts, recommendedProducts, inShopProducts } from './products.js';

gsap.from(".heading>h1, .heading>h5",{
    x:-180,    
    duration:0.6,
    opacity:0,
    color:"white",
})
gsap.from(".page2. .page2>.heading",{
    x:-100,
    opacity:0.4,
    duration:0.4,
    stagger:0.2,
})

document.addEventListener("DOMContentLoaded", function () {
    BAR();
    displayProducts()


    
});



function BAR() {
    const loginBtn = document.querySelector(".loginBar");
    const signupBtn = document.querySelector(".signupBar");
    const loginPage = document.querySelector(".login-page");
    const signupPage = document.querySelector(".signup-page");

    loginBtn.addEventListener("click", function () {
        
        loginPage.style.display="block";
        loginBtn.style.backgroundColor="#57280A";
        loginBtn.style.color="white";
        signupBtn.style.backgroundColor="#FCF2D9";
        signupBtn.style.color="black";
        signupPage.style.display="none"; signupPage.classList.remove("active");
    });

    signupBtn.addEventListener("click", function () {
        
        signupBtn.style.color="white";
        signupPage.style.display="block";
        signupBtn.style.backgroundColor="#57280A";
        loginBtn.style.backgroundColor="#FCF2D9";
        loginBtn.style.color="black";
        loginPage.style.display="none";
  });
    
}

   

function displayProducts() {

    let heroProductBar = document.querySelector(".heroProductContainer")
    let clutter = " ";
    heroProducts.forEach(obj => {
        clutter += `<div class="hero-product">
        <div class="product">
        <h5 class="product-tag">Best seller of this week</h5>
        <h2 class="product-name">${obj.img_name}/h2>
        <div class="more">
            <h4 class="product-info">More Info</h4>
            <i class="ri-arrow-right-line"></i>
        </div>
        </div>
    <img src="${obj.img_src}"  class="product-img"  alt="">
    </div>`;
    });


    heroProductBar.innerHTML = clutter;

    console.log("hello ji")
    console.log(clutter)
    };