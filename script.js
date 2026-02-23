// 🌙 DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🎬 SCROLL REVEAL
const revealSections = document.querySelectorAll("section");

function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.85;

  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// 🚀 FETCH FEATURED GITHUB PROJECTS
const username = "Tadie08";
const container = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {

    const filtered = data
      .filter(repo => !repo.fork)
      .sort((a,b) => b.stargazers_count - a.stargazers_count)
      .slice(0,6);

    filtered.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available."}</p>
        <a href="${repo.html_url}" target="_blank">View Repository →</a>
      `;

      container.appendChild(card);
    });

  })
  .catch(() => {
    container.innerHTML = "Unable to load projects.";
  });
