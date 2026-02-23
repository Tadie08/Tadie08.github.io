// 🌙 DARK MODE
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 🎬 SCROLL REVEAL
const sections = document.querySelectorAll("section:not(.hero)");

function revealOnScroll(){
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < triggerBottom){
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// 📊 SKILL BAR ANIMATION
const skills = document.querySelectorAll(".progress");

function animateSkills(){
  skills.forEach(skill => {
    skill.style.width = skill.classList.contains("js") ? "85%" :
                        skill.classList.contains("py") ? "90%" :
                        "80%";
  });
}

window.addEventListener("scroll", animateSkills);
