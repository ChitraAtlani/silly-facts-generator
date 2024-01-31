function fetchFact() {
  // Make an AJAX request to the API endpoint
  fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    .then((response) => response.json())
    .then((data) => {
      // Update the fact text with the fetched fact
      document.getElementById("fact-text").textContent = data.text;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("audioElement");
  var playButton = document.getElementById("refresh-button");

  playButton.addEventListener("click", function () {
    audio.play();
  });
});

// Fetch a fact on page load
fetchFact();

// Add event listener to refresh button
document
  .getElementById("refresh-button")
  .addEventListener("click", function () {
    // Fetch a new fact when the button is clicked
    fetchFact();
  });
