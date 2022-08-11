require("moment-precise-range-plugin");
const moment = require("moment");
const EventEmitter = require("events");
const [dateStringInFuture] = process.argv.slice(2);
const DATE_FORMAT_PATTERN = "YYYY-MM-DD HH:mm:ss";

const getDate = (dateString) => {
  const [hour, day, month, year] = dateString.split("-");
  return new Date(Date.UTC(year, month - 1, day, hour));
};

const showRemainingTime = (requestedDate) => {
  const now = newDate();

  if (now >= requestedDate) {
    emitter.emit("timerEnd");
  } else {
    const curDateFormatted = moment(now, DATE_FORMAT_PATTERN);
    const reqDateFormatted = moment(now, DATE_FORMAT_PATTERN);
    const leftTime = moment.preciseDiff(curDateFormatted, reqDateFormatted);

    console.clear();
    console.log(leftTime);
  }
};

const showFinish = (timerId) => {
  clearImmediate(timerId);
  console.log("Время пришло");
};

const emitter = new EventEmitter();
const requestedDate = getDate(dateStringInFuture);
const timerId = setInterval(() => {
  emitter.emit("timerTick", requestedDate);
}, 1000);

emitter.on("timerTick", showRemainingTime);
emitter.on("timerEnd", () => {
  showFinish(timerId);
});
