// 🌙 DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

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
      `;

      card.addEventListener("click", () => {
        window.open(repo.html_url, "_blank");
      });

      container.appendChild(card);
    });

  })
  .catch(() => {
    container.innerHTML = "Unable to load projects.";
  });
