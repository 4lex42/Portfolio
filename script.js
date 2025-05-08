// Fonction pour ouvrir la carte du projet
function openCard(project) {
  // Récupère les informations du projet
  const imgSrc = project.querySelector("img").src;
  const title = project.querySelector("h3").textContent;
  const description = project.querySelector("p").textContent;
  const codeLink = project.querySelector("a[href^='https://github.com']").href;
  const demoLink = project.querySelector("a[href^='https://']").href;

  // Met à jour les informations de la carte
  document.getElementById("card-img").src = imgSrc;
  document.getElementById("card-title").textContent = title;
  document.getElementById("card-description").textContent = description;
  document.getElementById("card-code").href = codeLink;
  document.getElementById("card-demo").href = demoLink;

  // Affiche la carte
  document.getElementById("project-card").style.display = "flex";
}

// Fonction pour fermer la carte
function closeCard() {
  document.getElementById("project-card").style.display = "none";
}
