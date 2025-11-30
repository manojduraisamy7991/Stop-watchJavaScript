const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let count = 0;
let timer = null;

start.addEventListener("click", (e) => {
  if (timer) return;
  timer = setInterval(() => {
    count++;
    document.getElementById("timer").innerHTML = count;
  }, 500);
});

stop.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

reset.addEventListener("click", () => {
  console.log("times", timer);

  clearInterval(timer);
  timer = null;
  count = 0;
  document.getElementById("timer").innerHTML = count;
});
