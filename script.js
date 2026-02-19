// script.js (COMPLETO)

// scroll flecha
function scrollDown(){
    const target = document.getElementById("info");
    if(target) target.scrollIntoView({ behavior:"smooth" });
  }
  
  // COUNTDOWN
  const targetDate = new Date("2026-12-05T00:00:00").getTime();
  
  function pad2(n){ return String(n).padStart(2, "0"); }
  
  setInterval(() => {
    const now = Date.now();
    const diff = targetDate - now;
  
    if(diff <= 0){
      document.getElementById("days").textContent = 0;
      document.getElementById("hours").textContent = 0;
      document.getElementById("minutes").textContent = 0;
      document.getElementById("seconds").textContent = 0;
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = pad2(hours);
    document.getElementById("minutes").textContent = pad2(minutes);
    document.getElementById("seconds").textContent = pad2(seconds);
  }, 1000);
  