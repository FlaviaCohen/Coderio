export const handleData = (data) => {
  let day = data.datetime.split("T")[0].split("-")[2];
  let month = data.datetime.split("T")[0].split("-")[1];
  let year = data.datetime.split("T")[0].split("-")[0];

  let date = day + "/" + month + "/" + year;

  let hour = parseInt(data.datetime.split("T")[1].split(".")[0].split(":")[0]);
  let minutes = data.datetime.split("T")[1].split(".")[0].split(":")[1];
  let period = "PM";

  if (hour < 12) {
    period = "AM";
  }
  if (hour && hour < 10) {
    hour = "0" + hour.toString();
  }
  if (hour && hour > 12 && hour < 22) {
    hour = "0" + (hour - 12).toString();
  }
  if (hour && hour > 12 && hour >= 22){
    hour = (hour - 12).toString();
  }
  if (!hour) {
    hour = "12";
  }

  let time = hour + ":" + minutes + period;

  return { date, time };
};
