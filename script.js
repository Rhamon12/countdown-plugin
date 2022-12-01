import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2022 23:59:59 GMT-0300")
const diasNatal = document.querySelector('.dias-natal')


setInterval(() => {
  diasNatal.innerText = JSON.stringify(`${tempoParaONatal.total.days} dias, ${tempoParaONatal.total.hours} horas, ${tempoParaONatal.total.minutes} minutos e ${tempoParaONatal.total.secs} segundos`) .replace(/"/g, "")
}, 1000);
