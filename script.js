const username = "Tadie08";
const container = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(data => {
    container.innerHTML = "";

    data
      .filter(repo => !repo.fork)
      .slice(0, 6)
      .forEach(repo => {
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
  .catch(err => {
    container.innerHTML = "Failed to load projects.";
    console.error(err);
  });