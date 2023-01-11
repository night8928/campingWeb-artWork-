var swiper = new Swiper(".bg-slider-thunbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  // 選取小圖
  var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });
 // 換的內容
//  var swiper3 = new Swiper(".about", {
//   loop: true,
//   spaceBetween: 0,
//   thumbs: {
//     swiper: swiper,
//   },
// });

 //try
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY > 0);
  });

  const menuBtn = document.querySelector(".nav-menu-btn");
  const closeBtn = document.querySelector(".nav-close-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
