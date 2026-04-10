
  document.addEventListener('DOMContentLoaded', () => {
    const testimonialSwiper = new Swiper('.testimonials-swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.testimonials-swiper .swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 30,
    });
  });



    document.addEventListener("DOMContentLoaded", () => {
    const filterBtns = document.querySelectorAll(".portfolio-filters li");
    const items = document.querySelectorAll(".portfolio-item");

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(el => el.classList.remove("filter-active"));
        btn.classList.add("filter-active");

        const filter = btn.getAttribute("data-filter");

        items.forEach(item => {
          if (filter === "*" || item.classList.contains(filter.substring(1))) {
            item.style.display = "block";
            item.classList.add("show");
          } else {
            item.style.display = "none";
            item.classList.remove("show");
          }
        });
      });
    });
  });


 
  document.addEventListener("DOMContentLoaded", () => {

    const lightbox = GLightbox({
      selector: '.glightbox',   
      touchNavigation: true,
      loop: true,
      zoomable: true,
      autoplayVideos: true
    });
  });



  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');

      // Close other items if you want only one open at a time
      faqItems.forEach(otherItem => {
        if(otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
    });
  });



document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".contact-form"); // fixed
  const loading = form.querySelector(".loading");
  const error = form.querySelector(".error-message");
  const success = form.querySelector(".sent-message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    loading.style.display = "block";
    error.style.display = "none";
    success.style.display = "none";

    const name = form.querySelector("#name-field").value.trim();
    const email = form.querySelector("#email-field").value.trim();
    const subject = form.querySelector("#subject-field").value.trim();
    const message = form.querySelector("#message-field").value.trim();

    if (!name || !email || !subject || !message) {
      loading.style.display = "none";
      error.innerHTML = "Please fill in all fields!";
      error.style.display = "block";
      return;
    }

    setTimeout(() => {
      loading.style.display = "none";
      success.innerHTML = "Your message has been sent. Thank you!";
      success.style.display = "block";
      form.reset();
    }, 1000);
  });
});


