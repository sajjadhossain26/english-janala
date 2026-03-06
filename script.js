const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const displayCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((json) => displayCardDetails(json));
};

const displayLesson = (lessons) => {
  const button = document.getElementById("learn-container");
  button.innerHTML = ``;
  for (let lesson of lessons) {
    const creatDiv = document.createElement("div");

    creatDiv.innerHTML = `
     <button onclick="displayCard(${lesson.level_no})" class="btn btn-primary btn-outline sm:text-sm"
            ><i class="fa-solid fa-book-open"></i> ${lesson.lessonName} -${lesson.level_no}</
    button>
    `;
    button.append(creatDiv);
  }
};

const displayCardDetails = (details) => {
  console.log(details);

  const detialsCard = document.getElementById("card-details");
  detialsCard.innerHTML = ``;
  console.log(details);

  for (let detail of details.data) {
    const creatDetails = document.createElement("div");
    creatDetails.innerHTML = ` <div class="card bg-white rounded-md py-[60px] p-[10px]">
              <h1 class="text-xl font-bold">${detail.word}</h1>
            <p>Meaning/Pronounciation</p>
            <h1 class="text-xl font-bold">${detail.meaning}/${detail.pronunciation}</h1>
            <div class="card-btn flex justify-around mt-[30px]">
              <button class=" bg-blue-300 rounded-full p-[10px]">
                <i class="fa-solid fa-circle-info text-white"></i>
              </button>
              <button class=" bg-blue-300 rounded-full p-[10px]">
                <i class="fa-solid fa-volume-high text-white"></i>
              </button>
            </div>
          </div>`;
    detialsCard.append(creatDetails);
  }
};
loadLessons();
