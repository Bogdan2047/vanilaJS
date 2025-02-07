export function createQuizz() {
  const quzzes = [
    {
      id: 1,
      quest: "Have you experienced erectile problems or decrease in libido?",
      img: "../assets/1.png",
      passed: false,
      hide: false,
    },
    {
      id: 2,
      quest:
        "Are you currently taking any medications or supplements that might affect your sexual health?",
      img: "../assets/2.png",
      passed: false,
      hide: true,
    },
    {
      id: 3,
      quest:
        "Do you have any underlying health conditions, such as diabetes or hypertension?",
      img: "../assets/3.png",
      passed: false,
      hide: true,
    },
    {
      id: 4,
      quest:
        "Have you ever undergone any previous treatments or surgeries for sexual enhancement or related issues?",
      img: "../assets/4.png",
      passed: false,
      hide: true,
    },
    {
      id: 5,
      quest:
        "How important is it for you to have access to safe and effective medication for enhancing your sexual health?",
      img: "../assets/5.png",
      passed: false,
      hide: true,
    },
    {
      id: 6,
      quest: "Do you think your wife is satisfied with the size of your penis?",
      img: "../assets/6.png",
      passed: false,
      hide: true,
    },
  ];

  let num = 0;

  const quizz = document.createElement("div");
  quizz.className = "quizz";

  function render() {
    if (num >= quzzes.length) {
      quizz.innerHTML = `
      <div class="blockCompleted" id="quizz">
        <div class="blockCograt">
            <span class="textStyle">Congratulations!</span>
            <span class="textTwoStyle">You've won new program bears</span>
        </div>
        <div>
            <img src="../assets/gumy.png" alt="" class="imgCompStyle" />
        </div>
        <div class="blockInfo">
            <span class="textTreeStyle">1. Click on "OK" and then continue with the delivery page</span>
            <span class="textTreeStyle">2. Fill in the form to receive one free botle you have <span class="timer" id="timer"></span> minutes to do it</span>
        </div>
        <div class="blockMail">
            <div>
                <input placeholder="Enter Mail" class="inputStyle"  />
            </div>
            <div>
                <button class="btnSend">Send</button>
            </div>
        </div>
      </div>
      `;

      startTimer();
      return;
    }

    quizz.innerHTML = `
        <div class="quizzBlock" id="quiz">
          <div class="blockOne">
            <div class="subBlockOne">
              <img src="../assets/blueLine.png" alt="" class="imgLineStyle" />
              <div class="titleBlock">
                <span class="textStyle">
                  Just answer a few quick health-related questions in under two
                  minutes, and you're good to go.
                </span>
              </div>
            </div>
  
            <div class="subBlockTwo">
              <div class="blockCount" >
              ${quzzes
                .map(
                  (item) =>
                    `<div class="count" 
                  style="background-color: ${
                    num + 1 === item.id ? "black" : "white"
                  }"
                  >
                  <span style="color: ${
                    num + 1 === item.id ? "white" : "blue"
                  };">${item.id}</span>
                </div>`
                )
                .join(` `)}
                
              </div>
              <div class="blockQuest">
                <span class="textTwoStyle">${quzzes[num].quest}</span> 
              </div>
            </div>
  
            <div class="subBlockTree">
              <div class="yes" data-id="${quzzes[num].id}">
                <span class="textTreeStyle">YES</span>
              </div>
              <div class="no">
                <span class="textTreeStyle">NO</span>
              </div>
            </div>
          </div>
          <div class="blockTwo">
            <img src="${quzzes[num].img}" alt="" class="imgDoctorStyle" /> 
          </div>
        </div>
      `;
  }

  function startTimer() {
    let timeLeft = 360; // 6 минут в секундах

    const timerElement = document.getElementById("timer"); // Элемент для отображения времени

    // Функция для обновления таймера
    function updateTimer() {
      const minutes = Math.floor(timeLeft / 60); // Получаем количество минут
      const seconds = timeLeft % 60; // Получаем количество секунд

      // Отображаем оставшееся время в формате MM:SS
      if (timerElement) {
        timerElement.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      }

      // Уменьшаем оставшееся время на 1 каждую секунду
      timeLeft--;

      // Если время закончилось, запускаем таймер заново
      if (timeLeft < 0) {
        timeLeft = 360; // Сбросить время на 6 минут
      }
    }

    // Обновляем таймер каждую секунду
    setInterval(updateTimer, 1000);
  }

  quizz.addEventListener("click", (event) => {
    const button = event.target.closest(".yes, .no");
    if (!button) return;
    num++;
    render();
  });

  render();

  return quizz;
}
