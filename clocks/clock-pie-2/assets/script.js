(function () {
  // + SVG Element
  const canvas = document.getElementById("canvas");
  canvas.width = 420;
  canvas.height = 420;
  const ctx = canvas.getContext("2d");

  const center = {};
  center.x = canvas.width / 2;
  center.y = canvas.height / 2;


// Date Settings
let d = new Date()

function getWeekOfMonth(date) {
  let adjustedDate = date.getDate() + date.getDay();
  let prefixes = ["0", "1", "2", "3", "4", "5"];
  return parseInt(prefixes[0 | (adjustedDate / 7)]) + 1;
}

function getDaysOfMonth(d) { 
    return new Date(d.getYear(), d.getMonth() + 1, 0).getDate();
}

// Hours
  draw_circle(210, scale_to_angle(d.getHours(), 24), "#66cccc");
// Days
  draw_circle(170, scale_to_angle(d.getDay(), getDaysOfMonth(d)), "#cc69a4");
// Weeks
  draw_circle(130, scale_to_angle(getWeekOfMonth(d), 4), "#47c668");
// Months
  draw_circle(90, scale_to_angle(d.getMonth(), 11), "#d83535");



  function scale_to_angle(value,max){
      return  (value * 2 * Math.PI) / max;
  }

// Circles on Canvas
  function draw_circle(radius, angle, color) {
    // Arc Depth
    let pie_width = 40;
    // start drawing ark with given angle
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(
      center.x,
      center.y,
      radius,
      3 * (Math.PI / 2) + angle,
      3 * (Math.PI / 2),
      true
    );
    ctx.fillStyle = color; //red
    ctx.fill();

    // Inner-Clipping
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, radius - pie_width, 0, 2 * Math.PI);
    ctx.fill();

    // Stop Clipping
    ctx.restore();
  }
})();
