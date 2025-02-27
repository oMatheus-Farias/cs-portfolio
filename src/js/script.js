document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".header-nav-list a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const target = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(target);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });
});
