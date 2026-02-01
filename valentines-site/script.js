document.addEventListener("DOMContentLoaded", () => {
  // Get the button and result container
  const button = document.getElementById("generateBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    // Get input values and trim whitespace
    const to = document.getElementById("toName").value.trim();
    const from = document.getElementById("fromName").value.trim();

    // Make sure both inputs are filled
    if (!to || !from) {
      alert("Please fill in both names ❤️");
      return;
    }

    // Build link pointing to valentine.html
    const baseURL = window.location.origin + '/valentine.html';
    const link = `${baseURL}?to=${encodeURIComponent(to)}&from=${encodeURIComponent(from)}`;

    // Display the link for copying / clicking
    result.innerHTML = `
      <p>Your personalised Valentine link:</p>
      <a href="${link}" target="_blank">${link}</a>
    `;
  });
});
