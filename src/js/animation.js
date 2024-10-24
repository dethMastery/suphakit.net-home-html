window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  const cover = document.querySelectorAll("#home-cover > .cover");

  console.log(cover);

  for (let i = 0; i < cover.length; i++) {
    setTimeout(() => {
      cover[i].classList.toggle("start");
    }, 500);
  }

  setTimeout(() => {
    for (let i = 0; i < cover.length; i++) {
      cover[i].classList.toggle("no-delay");
    }
  }, 5000);

  //  for (let i = 0; i < cover.length; i++) {
  //    setTimeout(homeCallback(cover[i], 'start'), 3000);
  //  }
});
