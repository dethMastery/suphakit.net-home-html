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
  {
    id: 3,
    name: "poke-tcg-tools",
    link: "https://github.com/dethMastery/poke-tcg-tools",
    lang: "React.js, Vite.js, Typescript",
    desp: "Just a tools that help me play Pokémon TCG without torture (with Damage token).",
  },
  {
    id: 4,
    name: "vg-tool",
    link: "https://github.com/dethMastery/vg-tool",
    lang: "Vue.js, Vite.js, Typescript",
    desp: "CardFight Vanguard Tool that help you calculate Power",
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

  const Template = `<a
  target="_blank"
  class="work-container"
  href="${works[i].link}"
>
  <div class="text-container">
    <h2 class="work-name">${works[i].name}</h2>
    <p class="work-desp">${works[i].desp}</p>
    ${
      lang != ""
        ? `
    <div class="work-lang-container">${lang}</div>
    `
        : ""
    }
  </div>
</a>
`;

  workElement.innerHTML += Template;
}
