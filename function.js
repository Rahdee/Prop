document.addEventListener("DOMContentLoaded", function () {
    const scrollDown = document.querySelector(".scroll-down");

    scrollDown.addEventListener("click", function (e) {
      e.preventDefault();
      const nextSection = document.querySelector("#next");
      nextSection.scrollIntoView({ behavior: "smooth" });
    });
  });




