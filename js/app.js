class SimpleClock {
  constructor() {
    this.deg = 360;
  }

  display(selector, option = {}) {
    selector = document.querySelector(selector);
    selector.innerHTML = this.#clockTemplate();
    let hours = document.querySelectorAll(".hour-hand");
    let minutes = document.querySelectorAll(".minute-hand");
    let seconds = document.querySelectorAll(".second-hand");

    setInterval(() => {
      let [nHour, nMinute, nSecond] = Date().substring(16, 24).split(":");
      //get second
      nSecond = nSecond * (this.deg / 60);
      //get second past
      let nSecondPast = (nSecond / this.deg) * 6;
      //get minute
      nMinute = nMinute * (this.deg / 60) + nSecondPast;
      //get minute past
      let nMinutePast = (nMinute / this.deg) * 30;
      //get hour
      nHour = nHour * (this.deg / 12) + nMinutePast;
      //display time
      hours.forEach((hour) => {
        hour.style.rotate = `${nHour}deg`;
      });
      minutes.forEach((minute) => {
        minute.style.rotate = `${nMinute}deg`;
      });
      seconds.forEach((second) => {
        second.style.rotate = `${nSecond}deg`;
      });
    }, 1000);
  }

  #clockTemplate() {
    const template = `
      <div class="clock-container">
        <div class="time-container">
          <div class="clock-number clock-number-1">
            <div class="hour-number">1</div>
          </div>
          <div class="clock-number clock-number-2">
            <div class="hour-number">2</div>
          </div>
          <div class="clock-number clock-number-3">
            <div class="hour-number">3</div>
          </div>
          <div class="clock-number clock-number-4">
            <div class="hour-number">4</div>
          </div>
          <div class="clock-number clock-number-5">
            <div class="hour-number">5</div>
          </div>
          <div class="clock-number clock-number-6">
            <div class="hour-number">6</div>
          </div>
          <div class="clock-number clock-number-7">
            <div class="hour-number">7</div>
          </div>
          <div class="clock-number clock-number-8">
            <div class="hour-number">8</div>
          </div>
          <div class="clock-number clock-number-9">
            <div class="hour-number">9</div>
          </div>
          <div class="clock-number clock-number-10">
            <div class="hour-number">10</div>
          </div>
          <div class="clock-number clock-number-11">
            <div class="hour-number">11</div>
          </div>
          <div class="clock-number clock-number-12">
            <div class="hour-number">12</div>
          </div>
        </div>
        <div class="time-hand">
          <div class="hour-hand">
            <div class="blank-space"></div>
            <div class="needle"></div>
          </div>
          <div class="minute-hand">
            <div class="blank-space"></div>
            <div class="needle"></div>
          </div>
          <div class="second-hand">
            <div class="blank-space"></div>
            <div class="needle"></div>
          </div>
          <div class="dot-hand"></div>
        </div>
      </div>`;

    return template;
  }
}
