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

  for (let detail of details.data) {
    const creatDetails = document.createElement("div");
    creatDetails.innerHTML = ` <div class="card bg-white rounded-md py-5 p-[10px]">
            <h1 class="text-xl font-bold">Eager</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <h1 class="text-xl font-bold">${detail.pronunciation}</h1>
            <div class="card-btn flex justify-around">
              <button>
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button>
                <i class="fa-solid fa-volume"></i>
              </button>
            </div>
          </div>`;
    detialsCard.append(creatDetails);
  }
};
loadLessons();
