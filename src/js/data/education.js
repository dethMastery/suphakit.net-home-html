const Education = [
  {
    id: 0,
    grade: "Grade 1 - 6",
    class: "",
    school: "Darasamutr Sriracha School",
    year: "2005-2014",
  },
  {
    id: 1,
    grade: "Grade 7-9",
    class: "MEP",
    school: "Sriracha School",
    year: "2014 - 2018",
  },
  {
    id: 2,
    grade: "Grade 10",
    class: "Sci - Math",
    school: "Piboonbumpen Demonstration School",
    year: "2018 - 2019",
  },
  {
    id: 3,
    grade: "Grade 11 - 12",
    class: "Sci - Math",
    school: "Darasamutr Sriracha School",
    year: "2019 - 2021",
  },
  {
    id: 4,
    grade: "Bachelor's degree",
    class: "Computer Engineering",
    school: "Phayao University",
    year: "2021 - 2024",
  },
  {
    id: 5,
    grade: "Bachelor's degree",
    class: "Information Technology",
    school: "Sripatum University Chonburi District",
    year: "2024 - Now",
  },
];

const revData = Education.reverse();

const EduElement = document.querySelector("#user-edu");

for (let i = 0; i < Education.length; i++) {
  let data = revData[i];

  const Template = `<div class="edu-container" id="edu-${data.id}">
  <p class="grade">
    ${data.grade}
  </p>
  <h1 class="school">
    ${data.school}
  </h1>
  ${data.class != "" ? `<p class="school-class">${data.class}</p>` : ""}
  <p class="year">
    ${data.year}
  </p>
</div>`;

  EduElement.innerHTML += Template;
}
