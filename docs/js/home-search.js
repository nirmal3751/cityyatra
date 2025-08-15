document.addEventListener("DOMContentLoaded", function () {
  const exploreBtn = document.getElementById("explore-button");
  const stateList = document.getElementById("state-list");

  exploreBtn.addEventListener("click", () => {
    const isHidden = stateList.classList.contains("hidden");

    if (isHidden) {
      stateList.classList.remove("hidden");
      stateList.classList.add("visible");

      // 🌟 Smooth scroll to state list
      stateList.scrollIntoView({ behavior: "smooth", block: "start" });

      // Optional: Change button text
      exploreBtn.innerHTML = '<span class="emoji">🌏</span> Hide States';
    } else {
      stateList.classList.add("hidden");
      stateList.classList.remove("visible");

      // Optional: Reset button text
      exploreBtn.innerHTML = '<span class="emoji">🌏</span> Explore All Cities & States';
    }
  });
});
