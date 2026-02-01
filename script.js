document.addEventListener("DOMContentLoaded", () => {
  const toInput = document.getElementById("toName");
  const fromInput = document.getElementById("fromName");
  const generateBtn = document.getElementById("generateBtn");

  // Envelope and card elements
  const envelopeTop = document.querySelector(".envelope-top");
  const envelopeSeal = document.querySelector(".envelope-seal");
  const valentineText = document.getElementById("valentine-text");
  const valentineMsg = document.getElementById("valentine-msg");
  const loveProgress = document.querySelector(".love-progress");

  generateBtn.addEventListener("click", () => {
    const to = toInput.value.trim();
    const from = fromInput.value.trim();

    if (!to || !from) {
      alert("Please fill in both names ❤️");
      return;
    }

    // Set greeting text
    valentineText.textContent = `Will u be my Valentine, ${to}?`;
    valentineMsg.textContent = `A little gift from ${from} ❤️`;

    // Reset envelope animation
    envelopeTop.style.transform = "rotateX(0deg)";
    loveProgress.style.width = "0%";

    // Show the envelope (if hidden)
    envelopeTop.parentElement.style.display = "block";

    // Add click listener to seal to open envelope
    envelopeSeal.onclick = () => {
      envelopeTop.style.transform = "rotateX(-180deg)";
      // Animate love bar
      setTimeout(() => {
        loveProgress.style.width = "90%"; // glowing love level
      }, 400);
    };
  });
});
