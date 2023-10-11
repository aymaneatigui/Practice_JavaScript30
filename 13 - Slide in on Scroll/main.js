function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slideImages = document.querySelectorAll(".slide-in");

const handelSlideIn = (e) => {
  slideImages.forEach((img) => {
    const slideAt = window.scrollY + window.innerHeight - img.height / 2;
    const imgbuttom = img.offsetTop + img.height;
    const slideIn = slideAt > img.offsetTop;
    const slideOff = window.scrollY > imgbuttom;
    if (slideIn && !slideOff) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", debounce(handelSlideIn, 10));
