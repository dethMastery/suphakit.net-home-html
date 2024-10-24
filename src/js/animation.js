function homeCallback(elm, className) {
  console.log(elm);
  elm.classList.toggle(className);
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  const cover = document.querySelectorAll("#home-cover > .cover");

  console.log(cover);

  for (let i = 0; i < cover.length; i++) {
    setTimeout(() => {
      cover[i].classList.toggle("start");
    }, 500);
  }

  //  for (let i = 0; i < cover.length; i++) {
  //    setTimeout(homeCallback(cover[i], 'start'), 3000);
  //  }
});
