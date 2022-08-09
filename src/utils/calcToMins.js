/**
 * calculate the time of reading, by default the speed of reading is 120 words per minute
 */
export default function calcToMins(count) {
  const speed = 120;
  let hours = 0;
  let minute = (count / speed).toFixed(0);

  if (minute > 60) {
    hours = (minute / 60).toFixed(0);
    minute = minute % 60;
    return hours + "h " + minute + "min";
  }

  return minute + " min";
}
