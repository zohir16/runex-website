
      document.addEventListener("DOMContentLoaded", function () {
        /* ============================
   Collapsible Sections
============================ */
        const collapsibles = document.querySelectorAll(".collapsible");
        collapsibles.forEach((item) =>
          item.addEventListener("click", function () {
            this.classList.toggle("collapsible--expanded");
          })
        );

        /* ============================
   Hamburger Menu Toggle
============================ */
        const navToggler = document.querySelector(".nav__toggler");
        const navbar = document.querySelector(".nav");

        if (navToggler) {
          navToggler.addEventListener("click", () => {
            navbar.classList.toggle("collapsible--expanded");
          });
        }

        /* ============================
   Search Bar Toggle
============================ */
        const searchToggle = document.querySelector(".nav__search-toggle");
        const searchInput = document.getElementById("searchInput");

        if (searchToggle) {
          searchToggle.addEventListener("click", () => {
            searchInput.classList.toggle("active");
            searchInput.focus();
          });
        }

        /* ============================
   Smooth Scroll
============================ */
        const logo = document.querySelector(".nav__brand");
        const moreContent = document.getElementById("moreContent");

        if (logo && moreContent) {
          logo.addEventListener("click", (e) => {
            e.preventDefault();
            moreContent.scrollIntoView({ behavior: "smooth" });
          });
        }

        /* ============================
   Login Tabs
============================ */
        const signinForm = document.getElementById("signin");
        const signupForm = document.getElementById("signup");

        document.querySelectorAll('a[href="#signup"]').forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            signinForm?.classList.add("hidden");
            signupForm?.classList.remove("hidden");
          });
        });

        document.querySelectorAll('a[href="#signin"]').forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            signupForm?.classList.add("hidden");
            signinForm?.classList.remove("hidden");
          });
        });

        /* ============================
   Mega Menu Toggle (Mobile)
============================ */
        const megaToggles = document.querySelectorAll(
          ".nav__item--has-mega > .nav__link"
        );

        megaToggles.forEach((toggle) => {
          toggle.addEventListener("click", function (e) {
            e.preventDefault();
            const megaMenu = this.nextElementSibling;
            megaMenu.classList.toggle("active");

            document.querySelectorAll(".mega-menu").forEach((menu) => {
              if (menu !== megaMenu) menu.classList.remove("active");
            });
          });
        });

        document.addEventListener("click", function (e) {
          if (!e.target.closest(".nav__item--has-mega")) {
            document.querySelectorAll(".mega-menu").forEach((menu) => {
              menu.classList.remove("active");
            });
          }
        });

        /* ============================
   AOS Init
============================ */
        if (typeof AOS !== "undefined") {
          AOS.init({
            duration: 800,
            once: true,
          });
        }

        /* ============================
   Hero Slider
============================ */
        const slides = document.querySelectorAll(".hero__slide");
        const nextBtn = document.querySelector(".hero__next");

        let currentIndex = 0;

        function showSlide(index) {
          slides.forEach((slide) => slide.classList.remove("active"));
          slides[index].classList.add("active");
        }

        if (nextBtn && slides.length > 0) {
          nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
          });
        }
        // Auto-slide every 5 seconds (5000ms)
        setInterval(() => {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
        }, 5000);
      });
