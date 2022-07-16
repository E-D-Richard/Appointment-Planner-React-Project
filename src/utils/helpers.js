export const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
export const getCurrentTime = () => {
  const date = new Date();
  let hour = date.getHours().toString();
  hour = hour.length === 1 ? "0" + hour : hour;
  let minutes = date.getMinutes().toString();
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  return `${hour}:${minutes}`;
};

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const formatTime = (t, d) => {
    const militaryTime = t.split(":")
    let hour = militaryTime[0];
    const AmPm = hour > 12 ? "pm" : "am";
    hour = hour > 12 ? (hour -12) : hour;
    //gets weekday
    const dateStr = new Date(d) ;
    const weekDay = dateStr.getDay() + 1; 
    return String(`${dayNames[weekDay]} ${hour}:${militaryTime[1]}${AmPm}`)
  };
  //reformat time to 12 hour am/pm before submitting and saving appointment
  //const reformatedTime = formatTime(time);

export const formatDate = (d) => {
     const oldFormat = d.split("-");
     return `${oldFormat[1]}/${oldFormat[2]}/${oldFormat[0]}`
  }