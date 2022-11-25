"use strict";
const productImg = document.querySelector(".product > img");
const prevImg = document.querySelector(".product .btn--prev");
const nextImg = document.querySelector(".product .btn--next");
const productSmallImgs = document.querySelectorAll(".product .pictures div");
const nextProductImgBtn = document.querySelector(".lightbox .btn--next");
const prevProductImgBtn = document.querySelector(".lightbox .btn--prev");
const lightBox = document.querySelector(".lightbox");
const lightBoxImgContainer = document.querySelector(
  ".lightbox .img__container"
);
const navBar = document.querySelector("header nav");
const showNavBar = document.querySelector(".menu");
const closeNavBar = document.querySelector(".menu-close");
const lightBoxImgs = document.querySelectorAll(".lightbox .img__container>img");
const lightBoxSmallImgs = document.querySelectorAll(".lightbox .pictures div");
const closeLightBox = document.querySelector(".lightbox .close img");
const increaseItemBtn = document.querySelector(".btn-plus");
const decreaseItemBtn = document.querySelector(".btn-minus");
const productNumber = document.querySelector(".item-number");
const checkCart = document.querySelector(".cart");
const closeCart = document.querySelector(".cart-box h3 span");
const itemDigit = document.querySelector(".digit");
const itemBought = document.querySelector(".item-bought");
const numItemBought = document.querySelector(".item-bought p");
const totalAmount = document.querySelector(".total");
const addToCart = document.querySelector(".add-item");
const cartBox = document.querySelector(".cart-box");
const filledCart = document.querySelector(".filled-cart");
const emptyCart = document.querySelector(".empty-cart");
const deleteCart = document.querySelector(".delete");
const checkOut = document.querySelector(".checkout");
const thankYou = document.querySelector(".thank-you");
let counter = 0;
let imgCounter = 0;
const emptyCartFunc = function () {
  document.querySelector(".cart-box h3").style.display = "block";
  document.querySelector(".warning").style.display = "none";
  filledCart.style.display = "none";
  emptyCart.style.display = "block";
  numItemBought.textContent = 0;
};
const changeSlide = function () {
  if (imgCounter > lightBoxImgs.length - 1) {
    imgCounter = 0;
  } else if (imgCounter < 0) {
    imgCounter = lightBoxImgs.length - 1;
  }
  lightBoxImgContainer.style.transform = `translateX(${-imgCounter * 400}px)`;
};
showNavBar.addEventListener("click", function () {
  navBar.style.display = "block";
  closeNavBar.addEventListener("click", function () {
    navBar.style.display = "none";
  });
});
const displayLightBox = function () {
  lightBox.style.display = "block";
  nextProductImgBtn.addEventListener("click", function () {
    imgCounter++;
    changeSlide();
  });
  prevProductImgBtn.addEventListener("click", function () {
    imgCounter--;
    changeSlide();
  });
  const imgs = [...lightBoxSmallImgs];
  imgs.forEach(function (img, index) {
    imgs[index].addEventListener("click", function () {
      lightBoxImgContainer.style.transform = `translateX(${-index * 400}px)`;
    });
  });
  closeLightBox.addEventListener("click", function () {
    lightBox.style.display = "none";
  });
};
productSmallImgs.forEach(function (img) {
  img.addEventListener("click", displayLightBox);
});
productImg.addEventListener("click", displayLightBox);
increaseItemBtn.addEventListener("click", function () {
  productNumber.textContent++;
  counter = productNumber.textContent;
});
decreaseItemBtn.addEventListener("click", function () {
  if (counter > 0) {
    productNumber.textContent--;
    counter = productNumber.textContent;
  }
});
checkCart.addEventListener("click", function () {
  cartBox.style.display = "block";
  if (counter > 0) {
    filledCart.style.display = "block";
    emptyCart.style.display = "none";
    itemDigit.textContent = counter;
    totalAmount.textContent = (itemDigit.textContent * 125).toFixed(2);
    checkOut.addEventListener("click", function () {
      thankYou.style.display = "block";
      document.querySelector(".total__pay").textContent =
        totalAmount.textContent;
      document.querySelector(".back").addEventListener("click", function () {
        thankYou.style.display = "none";
        cartBox.style.display = "none";
      });
    });
  } else {
    emptyCartFunc();
  }
});
addToCart.addEventListener("click", function () {
  numItemBought.textContent = counter;
  let reset = counter;
  reset = 0;
  productNumber.textContent = reset;
  itemBought.style.display = "block";
});
closeCart.addEventListener("click", function () {
  cartBox.style.display = "none";
});
deleteCart.addEventListener("click", function () {
  filledCart.style.display = "none";
  document.querySelector(".cart-box h3").style.display = "none";
  document.querySelector(".warning").style.display = "block";
  document.querySelector(".yes").addEventListener("click", emptyCartFunc);
  document.querySelector(".no").addEventListener("click", function () {
    document.querySelector(".warning").style.display = "none";
    filledCart.style.display = "block";
    document.querySelector(".cart-box h3").style.display = "block";
  });
});
// MOBILE
let ImgCounterMobile = 1;
nextImg.addEventListener('click', function(){
  ImgCounterMobile++
  ImgCounterMobile > 4 ? ImgCounterMobile = 1 : ImgCounterMobile
  productImg.src = `./images/image-product-${ImgCounterMobile}.jpg`
})
prevImg.addEventListener('click', function(){
  ImgCounterMobile--
  ImgCounterMobile <= 0 ? ImgCounterMobile = 4 : ImgCounterMobile
  productImg.src = `./images/image-product-${ImgCounterMobile}.jpg`
})