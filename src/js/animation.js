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
    document.querySelector(".info-box > h1").classList.toggle("hide");
  }, 2000);

  setTimeout(() => {
    document.querySelector(".info-box > p").classList.toggle("hide");
  }, 2200);

  setTimeout(() => {
    for (let i = 0; i < cover.length; i++) {
      cover[i].classList.toggle("no-delay");
      document.querySelector(".info-box").classList.toggle("no-delay");
    }

    document.querySelector(".content-container").style.display = "inherit";

    setTimeout(() => {
      document.querySelector("#scrollDown").style.opacity = "1";
      document.querySelector("#scrollDown").style.animationName = "blinking";
    }, 100);
  }, 3000);

  //  for (let i = 0; i < cover.length; i++) {
  //    setTimeout(homeCallback(cover[i], 'start'), 3000);
  //  }
});
