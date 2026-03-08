const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};

const displayCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then((json) => {
<<<<<<< HEAD
      const btn = document.getElementById(`lesson-btn-${id}`);
      remoteActive();
      btn.classList.add("active");
      displayCardDetails(json);
    });
};

const remoteActive = () => {
  const btn = document.querySelectorAll(".actbtn");
  btn.forEach((btn) => btn.classList.remove("active"));
};

=======
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      remvoeActivebtn();
      clickBtn.classList.add("active");
      console.log(clickBtn);
      displayCardDetails(json);
    });
};
const remvoeActivebtn = () => {
  const btn = document.querySelectorAll(".actremove");
  console.log(btn);
  btn.forEach((btn) => btn.classList.remove("active"));
};
>>>>>>> 03b6afef6a46a843d65cb8906c84771e8a37a4da
const displayLesson = (lessons) => {
  const button = document.getElementById("learn-container");
  button.innerHTML = ``;
  for (let lesson of lessons) {
    const creatDiv = document.createElement("div");

    creatDiv.innerHTML = `
<<<<<<< HEAD
     <button id="lesson-btn-${lesson.level_no}" onclick="displayCard(${lesson.level_no})" class="btn btn-primary btn-outline sm:text-sm actbtn"
=======
     <button id="lesson-btn-${lesson.level_no}" onclick="displayCard(${lesson.level_no})" class="btn btn-primary btn-outline sm:text-sm actremove"
>>>>>>> 03b6afef6a46a843d65cb8906c84771e8a37a4da
            ><i class="fa-solid fa-book-open"></i> ${lesson.lessonName} -${lesson.level_no}</
    button>
    `;
    button.append(creatDiv);
  }
};

const displayCardDetails = (details) => {
  console.log(details.data);
  const checkCard = document.getElementById("next-lesson");
  const detialsCard = document.getElementById("card-details");
  detialsCard.innerHTML = ``;
  console.log(details);
  if (details.data.length == 0) {
    detialsCard.innerHTML = `
      <div
            id="next-lesson"
            class="next-leasson col-span-full text-center m-auto"
          >
            <img
              class="w-[80px] m-auto"
              src="./assets/alert-error.png"
              alt=""
            />
            <p class="">Ei Lessson e kono vocabulary jokto hoi nai!</p>
            <h1 class="text-[40px] font-bold">Next Lesson e jan</h1>
          </div>
    `;
  }

  for (let detail of details.data) {
    const info = detail.meaning ? `${detail.meaning}` : "No Word";
    const creatDetails = document.createElement("div");
    creatDetails.innerHTML = ` <div class="card bg-white rounded-md py-[60px] p-[10px]">
              <h1 class="text-xl font-bold">${detail.word}</h1>
            <p>Meaning/Pronounciation</p>
            <h1 class="text-xl font-bold">${info}/${detail.pronunciation}</h1>
            <div class="card-btn flex justify-around mt-[30px]">
<<<<<<< HEAD
              <button class=" bg-blue-300 rounded-full p-[10px]">
=======
              <button onclick="my_modal_2.showModal()" class=" bg-blue-300 rounded-full p-[10px] cursor-pointer">
>>>>>>> 03b6afef6a46a843d65cb8906c84771e8a37a4da
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
