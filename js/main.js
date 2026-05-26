const themeButton = document.querySelector("[data-theme-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const quoteButton = document.querySelector("[data-quote-button]");
const quoteBox = document.querySelector("#quote-box");

const quotes = [
  "Small daily progress is still progress.",
  "Clean code is easier to debug and easier to explain.",
  "A good project should solve a clear user problem.",
  "Keep building, keep testing, and keep improving.",
  "The best portfolio project is one you can explain clearly."
];

function applySavedTheme() {
  const savedTheme = localStorage.getItem("homepage-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "Light Mode";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("homepage-theme", isDark ? "dark" : "light");
  themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function filterProjects(category) {
  projectCards.forEach((card) => {
    const shouldShow = category === "all" || card.dataset.category === category;
    card.classList.toggle("hidden", !shouldShow);
  });
}

function updateActiveFilter(selectedButton) {
  filterButtons.forEach((button) => button.classList.remove("active"));
  selectedButton.classList.add("active");
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = quotes[randomIndex];
}

if (themeButton) {
  applySavedTheme();
  themeButton.addEventListener("click", toggleTheme);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateActiveFilter(button);
    filterProjects(button.dataset.filter);
  });
});

if (quoteButton && quoteBox) {
  quoteButton.addEventListener("click", showRandomQuote);
}
