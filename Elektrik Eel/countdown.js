
// Set the date we're counting down to
var countDownDate = new Date("Nov 22, 2024 01:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days =  formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
  var hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-text").innerText = "TIME TO PARTY";
  }
}, 1000);

function formatNumber(number) {
  if (number < 10) {
    return '0'+ number
  }

  return number
}