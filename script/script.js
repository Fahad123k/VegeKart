let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');

    ShoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


let ShoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    ShoppingCart.classList.toggle('active');

    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    
    loginForm.classList.remove('active');
}



let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
}
    




let navBar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>

{
    navBar.classList.toggle('active');
    // switch technique
    searchForm.classList.remove('active')
    ShoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}

window.onscroll=()=>{
    navBar.classList.remove('active')
    searchForm.classList.remove('active')
    ShoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
}

// swiper script for product slider
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
    
      },
    },
  });

  
// swiper script for review slider
var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:7500,
      disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
  
    },
  },
});