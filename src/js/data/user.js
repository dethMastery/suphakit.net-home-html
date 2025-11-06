var mS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const userData = {
  name: "Suphakit Pinyoworapot",
  image: "/src/img/profile.webp",
  subText: [
    "Junior Front-End Developer",
    "with kind of Full-Stack Web Developer Skills",
  ],
  desp: "Hi, I'm Joji, a 2nd year IT student. I’m a kind of a guy who tried to do “everything” that I have some passion with it like “coding” and “music composing” and I would like a job that allows for personal and professional growth.",
  details: [
    {
      floor: "Nickname",
      value: "Joe (Known as Joji, Joseph)",
    },
    {
      floor: "Birth Date",
      value: "1024099200000",
    },
    {
      floor: "Language",
      value: "Thai (Native), English (Intermediate)",
    },
    {
      floor: "Current Location",
      value: "Siracha, Chonburi",
    },
    {
      floor: "Interview Availability",
      value: "true",
    },
  ],
};

const userImageElement = document.querySelector("#user-data > .user-image");
userImageElement.innerHTML = `<div class="img" style="background: url(${userData.image});"></div>`;

const userDataElement = document.querySelector("#user-data > .data-user");
let detailElement = "";

for (let i = 0; i < userData.details.length; i++) {
  let dateSlug = "";

  if (userData.details[i].floor == "Birth Date") {
    const date = new Date(Number(userData.details[i].value));
    const BD = new Date().getFullYear() - date.getFullYear();

    dateSlug = `${date.getDate()} ${
      mS[date.getMonth()]
    }. ${date.getFullYear()} (${BD} years old now)`;
  }

  let template = `<div class="floor-container">
  <p class="floor">${userData.details[i].floor}</p>
  <p class="value">${
    userData.details[i].floor != "Birth Date" &&
    userData.details[i].floor != "Interview Availability"
      ? userData.details[i].value
      : userData.details[i].floor == "Birth Date"
      ? dateSlug
      : userData.details[i].floor == "Interview Availability"
      ? Boolean(userData.details[i].value)
        ? "Yes"
        : "No"
      : ""
  }</p>
</div>`;

  detailElement += template;
}

userDataElement.innerHTML = `<h2>${userData.name}</h2>
<p class="subText">${userData.subText[0]}</p>
<p class="subText">${userData.subText[1]}</p>
<p class="desp">${userData.desp}</p>
<div class="detailing">
  ${detailElement}
</div>`;
