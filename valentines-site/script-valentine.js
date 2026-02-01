// Read URL params
const params = new URLSearchParams(window.location.search);
const to = params.get("to") || "";
const from = params.get("from") || "";

const valentineText = document.getElementById("valentine-text");
if(valentineText && to) valentineText.innerText = `Happy Valentine’s Day ${to} 💖`;

// Slide navigation helpers
const showSlide = (id) => {
  document.querySelectorAll(".slide").forEach(s => s.classList.add("hidden-slide"));
  document.getElementById(id)?.classList.remove("hidden-slide");
};

// Auto slide 1 → 2
setTimeout(()=>showSlide("slide2"), 3000);

// Slide buttons
document.getElementById("toSlide3")?.addEventListener("click", ()=>showSlide("slide3"));
document.getElementById("toSlide4")?.addEventListener("click", ()=>showSlide("slide4"));
document.getElementById("toSlide5")?.addEventListener("click", ()=>showSlide("slide5"));

// Gifts
document.getElementById("gift1")?.addEventListener("click", ()=>showSlide("slide6a"));
document.getElementById("gift2")?.addEventListener("click", ()=>showSlide("slide6b"));
document.getElementById("gift3")?.addEventListener("click", ()=>showSlide("slide6c"));

// Optional QR click
document.querySelectorAll(".qr-img").forEach(qr=>{
  qr.addEventListener("click",()=>{
    document.querySelectorAll("#slide6a,#slide6b,#slide6c").forEach(s=>s.classList.add("hidden-slide"));
    // Can show final thank you if added
  });
});
