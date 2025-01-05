const works = [
  {
    id: 0,
    name: "tydon",
    link: "https://github.com/KIZUNEParty/tyDon",
    lang: "Javascript",
    desp: "Just a laziest cli script that making for convert time to epochtime.",
  },
  {
    id: 1,
    name: "Darken-World",
    link: "https://github.com/dethMastery/Darken-World",
    lang: "",
    desp: "Just a darkening world",
  },
  {
    id: 2,
    name: "daeg-arai-dee",
    link: "https://github.com/dethMastery/daeg-arai-dee",
    lang: "React.js, Vite.js, Typescript",
    desp: "The easier way for anyone who too lazy to pick what to eat.",
  },
];

const workElement = document.querySelector("#user-works");

for (let i = 0; i < works.length; i++) {
  let lang = "";

  if (works[i].lang != "") {
    if (works[i].lang.includes(",")) {
      let temp = works[i].lang.split(",");

      for (let j = 0; j < temp.length; j++) {
        lang += `<span class="works-lang-badge">${temp[j]}</span>`;
      }
    } else {
      lang = `<span class="works-lang-badge">${works[i].lang}</span>`;
    }
  }

  const Template = `<a target="_blank" class="work-container" href="${
    works[i].link
  }">
  <h2 class="work-name">
    ${works[i].name}
  </h2>
  <p class="work-desp">
    ${works[i].desp}
  </p>
  ${lang != "" ? `<div class="work-lang-container">${lang}</div>` : ""}
</a>`;

  workElement.innerHTML += Template;
}
