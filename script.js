function openCard(projectElement) {
  // Récupérer les données du projet
  const title = projectElement.querySelector("h3").innerText;
  const description = projectElement.getAttribute("data-description");
  const image = projectElement.getAttribute("data-img");
  const codeLink = projectElement.getAttribute("data-code");
  const demoLink = projectElement.getAttribute("data-demo");

  // Mettre à jour les informations dans la carte modale
  document.getElementById("card-title").innerText = title;
  document.getElementById("card-description").innerText = description;
  document.getElementById("card-img").src = image;
  document.getElementById("card-code").href = codeLink;
  document.getElementById("card-demo").href = demoLink;

  // Afficher la carte modale
  document.getElementById("project-card").style.display = "flex";
}

function closeCard() {
  // Masquer la carte modale
  document.getElementById("project-card").style.display = "none";
}
